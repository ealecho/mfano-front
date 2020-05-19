import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Foot, FormHolder, Headline, Email } from '../styles/FooterStyles'


const Footer = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <Foot>
            <Headline>Are you brave enough to burn the map?</Headline>
        <FormHolder>
         <form onSubmit={handleSubmit(onSubmit)}>
             <Input>
                <div>
                <input className="form" type="text" placeholder="What is your name?" name="Name" ref={register({required: true, maxLength: 80})} style={{ marginRight: '20px' }} />
                <input className="form" type="text" placeholder="Email" name="Your email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                </div>

                <input className="form" type="text" placeholder="How can we help?" name="needs" ref={register} />
                <input className="submit" type="submit" />
            </Input>
         </form>
         <Email>
             <div className="footerBlock">
               <span className="email" >hello@mfanolabs.com</span>
               <span className="project">Have a project in mind? Need a wise advice? Want to say hi? We are excited to talk to you.</span>
             </div>

             <div className="footerBlock">
               <span className="email" >Kampala</span>
               <span className="project">Block 244, Plot 7144, Kalungi Road, Muyenga P.O.Box 2265, Kampala (U), +256 414 672143  +256 200 902 188</span>
             </div>
             
        </Email>
        </FormHolder>
        <span style={{marginLeft:"206px"}}>Mfanolabs &copy;2020</span>
        
        </Foot>
    )
}

export default Footer
