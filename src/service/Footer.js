import React, {useState} from 'react';
import emailjs from "emailjs-com";
import Modal from "react-modal";

const Footer = () => {

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
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <footer className="footer-text">
            <div className="footer-block">

                <p>	&#9742; Номер телефона: +7(3822) 33-11-77</p>
                <p> &#9660; Адрес: г. Томск, ул. Никитина, д. 8а</p>
                <p> &#9993; Почта: arhiv70@yandex.ru</p>

            </div>

            <div className="footer-block">
                <p>Заказать бесплатный звонок</p>
                <button onClick={openModal} className="modal-button-footer">Заказать звонок</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div>
                    <div className="feedback">
                        <form onSubmit={sendEmail}>
                            <label className="form-label">Заказать звонок:</label>
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
                </div>
            </Modal>
        </footer>

    );
};

export default Footer;