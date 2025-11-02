'use client'
import AddressInfo from "@/components/contact/AddressInfo";
import ContactForm from "@/components/contact/ContactForm";
import useMobile from "@/hooks/useMobile";

export default function page() {
  const isMobile = useMobile();
  return (
    <div className="flex items-center w-[95%]  justify-between px-4">
      {!isMobile && <AddressInfo />}

      <ContactForm />
    </div>
  );
}
