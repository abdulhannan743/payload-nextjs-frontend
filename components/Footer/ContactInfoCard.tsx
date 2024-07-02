import React from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { Layout } from "@/src/types/footerTypes";

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  hasTitle?: boolean;
};

type ContactInfoCardProps = {
  layout: Layout;
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  content,
  hasTitle = true,
}) => (
  <div>
    {hasTitle && (
      <div className="flex items-center space-x-3">
        <div className=" text-blue-900">{icon}</div>
        <h5 className="font-bold text-sm text-blue-900">{title}</h5>
      </div>
    )}
    <p className="text-sm ml-11 text-xs">{content}</p>
  </div>
);

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ layout }) => {
  const { address, email, contactNumber, Heading } = layout;
  const headingText = Heading?.root?.children?.[0]?.children?.[0]?.text || "--";

  return (
    <Card className="p-6 bg-slate-100 mt-8 w-64">
      <CardTitle className="text-blue-900 font-bold pb-4">
        {headingText}
      </CardTitle>
      <CardDescription className="text-black">
        {address?.map((addr, index) => (
          <ContactInfo
            key={index}
            icon={<IoLocationSharp size={27} />}
            title={addr?.title?.root?.children[0]?.children[0]?.text || "--"}
            content={addr.Address || "--"}
          />
        ))}
        {email?.map((em, index) => (
          <ContactInfo
            key={index}
            icon={<MdEmail size={26} className="pl-1 mr-1" />}
            title={em?.title?.root?.children[0]?.children[0]?.text || "--"}
            content={em.email || "--"}
          />
        ))}
        {contactNumber?.map((contact, index) => (
          <ContactInfo
            key={index}
            icon={
              index === 0 ? <FaPhone size={22} className="pl-1 mr-2" /> : null
            }
            title={
              index === 0
                ? contact?.title?.root?.children[0]?.children[0]?.text || "--"
                : ""
            }
            content={contact?.contactNumber || "--"}
          />
        ))}
      </CardDescription>
    </Card>
  );
};

export default ContactInfoCard;
