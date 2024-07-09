import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import type { Layout } from "@/src/types/footerTypes";
import Container from "./Container";

type ContactInfoProps = {
  icon: React.ReactNode;
  title?: string;
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
      <div className="flex items-center space-x-3 ">
        <div className="text-blue-900">{icon}</div>
        <h5 className="font-bold text-sm text-blue-900">{title}</h5>
      </div>
    )}
    <p className="lg:text-xs md:text-sm lg:ml-11 md:ml-11 pb-2">{content}</p>
  </div>
);

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ layout }) => {
  const { address, email, contactNumber, Heading } = layout;
  const headingText = Heading?.root?.children?.[0]?.children?.[0]?.text || "--";
  return (
    <Container className="bg-stone-200 lg:p-4 md:p-6 lg:pr-16 md:pr-20 pl-2 ">
      <div className="text-blue-900 font-bold text-lg md:text-lg mb-4 mt-2">
        {headingText}
      </div>
      <div>
        {address?.map((addr, index) => (
          <ContactInfo
            key={index}
            icon={<IoLocationSharp size={27} />}
            title={addr?.title?.root?.children[0]?.children[0]?.text || "--"}
            content={addr.Address || "--"}
            hasTitle={true}
          />
        ))}
        {email?.map((em, index) => (
          <ContactInfo
            key={index}
            icon={<MdEmail size={26} className="pl-1 mr-1" />}
            title={em?.title?.root?.children[0]?.children[0]?.text || "--"}
            content={em.email || "--"}
            hasTitle={true}
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
            hasTitle={index === 0}
          />
        ))}
      </div>
    </Container>
  );
};

export default ContactInfoCard;
