import ContactInfo from "@components/ContactInfo/ContactInfo";
import ContactForm from "@components/ContactForm/ContactForm";

const Contacts = () => {
	return (
		<section className="content">
			<div className="contact-page">
				<ContactInfo />
				<ContactForm />
			</div>
		</section>
	);
};

export default Contacts;
