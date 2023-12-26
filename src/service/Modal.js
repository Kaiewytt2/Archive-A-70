import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'

const Modal = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if (!name || !phone) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        emailjs.sendForm('service_1ylkjfu', 'template_toqdvod', e.target, 'QmTINbffZOrMWv3A-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (



        <div className="container">
            <form onSubmit={sendEmail}>
                <label className="form-label">Закажите бесплатную консультацию:</label>
                <label>Ваше имя:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label>Ваш номер телефона:</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />

                <input type="submit" value="Отправить"/>
            </form>
        </div>
    );
};

export default Modal;