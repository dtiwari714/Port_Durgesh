import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  console.log(import.meta.env.VITE_MAILCHIMP_URL);
  console.log(import.meta.env.VITE_MAILCHIMP_U);
  console.log(import.meta.env.VITE_MAILCHIMP_ID);
  // const postUrl = `${import.meta.env.REACT_APP_MAILCHIMP_URL}?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}`;
  // const postUrl = `https://gmail.us13.list-manage.com/subscribe/post?u=${import.meta.env.REACT_APP_MAILCHIMP_U}&id=${import.meta.env.REACT_APP_MAILCHIMP_ID}&f_id=00c549e9f0`;

  const postUrl=`https://gmail.us13.list-manage.com/subscribe/post?u=c9617e9e3c7038028edf6fd16&amp;id=6474e75e0e&amp;f_id=00c549e9f0`
  console.log(postUrl); 
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}