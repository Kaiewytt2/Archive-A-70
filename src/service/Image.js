import React from 'react';

const Image = () => {

    return (

        <div class="container-img container ">

            <h2>Услуги</h2>
            <div class="image-block">
                <img src="image1.png" alt="Архивная обработка"/>
                <p className="text-image">Архивная обработка</p>
                <div class="text-block">
                    <p>Архивная обработка документов включает в себя: систематизацию документов
                        постоянного и временного срока хранения, а так же документов по личному составу, подготовку документов к переплету и сдаче на хранение.</p>
                </div>
            </div>

            <div className="image-block">
                <img src="image2.png" alt="Переплет документов"/>
                <p className="text-image">Переплет документов</p>
                    <div className="text-block">
                        <p>Переплет обеспечивает максимальную сохранность документов, позволяет уменьшить
                            их объем, включает изъятие файлов и скрепок, переплет документов в жесткую картонную
                            обложку с оклейкой корешка коленкором, оформление обложки согласно установленным
                            требованиям.</p>
                    </div>
            </div>

            <div className="image-block">
                <img src="image3.png" alt="Уничтожение документов"/>
                <p className="text-image">Уничтожение документов</p>
                <div className="text-block">
                    <p>Уничтожение документов после истечения истечения нормативного срока хранения.</p>
                </div>
            </div>
        </div>
    );
};

export default Image;