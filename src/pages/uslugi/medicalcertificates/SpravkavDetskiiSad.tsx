import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../../components/Seo";
import { dataSeoSpravkavSad } from "../../../data/Seo/dataSeoPages3Level";
import { BlockReklama3 } from "../../../components/reklama/BlockReklama3";
import { BlockReklama4 } from "../../../components/reklama/BlockReklama4";

export function SpravkavDetskiiSad() {
  return (
    <Container id="spravkavdetskiisad" fluid>
      <SeoPage {...dataSeoSpravkavSad} />
      <div className="page-h1">
        <Container>
          <h1>Справка в детский сад</h1>
        </Container>
      </div>
      <Container>
        <BlockReklama3 />
        <div className="d-flex mt-4 block-foto">
          <div className="me-4">
            <img
              className="size-img"
              src={require(`../../../assets/img/spravka2.jpg`)}
              alt="deti-sad"
              title="Справка в детский сад"
              width="200"
            />
          </div>
          <div>
            <p>
              Ребенку-дошкольнику необходимо три вида справок от педиатра:
              первая нужна при поступлении в детский сад, а затем, в процессе
              обучения в ДОУ, могут потребоваться документы после болезни и
              после отпуска.
            </p>
            <h5>Справка при поступлении в детсад (форма №026/у)</h5>
            <p>
              Кроме педиатра, ребенок должен быть обследован рядом других
              врачей: хирургом, неврологом, офтальмологом, отоларингологом,
              гинекологом/урологом. На основании заключений специалистов
              составляется обзор общего состояния здоровья (эпикриз),
              определяется группа здоровья, а также, есть ли противопоказания к
              занятиям физкультурой.
            </p>
          </div>
        </div>
        <div>
          <p>
            Чтобы состояние здоровья было оценено максимально полно и
            достоверно, нужны не только данные амбулаторной карты и врачебные
            осмотры, но и ряд анализов: ​
          </p>
          <ul>
            <li>общий анализ мочи (если здоровый ребенок, в течении 6 мес);</li>
            <li>
              клинический анализ крови (если здоровый ребенок, в течении 6 мес);
            </li>
            <li>соскоб на энтеробиоз;</li>
            <li>исследование кала на яйца гельминтов;</li>
            <li>бакпосев кала.</li>
          </ul>
          <p>
            <span className="fw-bold"> Важно!</span> Результаты исследования на
            энтеробиоз и анализа кала на яйца гельминтов действительны 10 дней.
          </p>
          <p>
            За три дня до поступления в садик нужно оформить справку от педиатра
            о том, что у ребенка за последние три недели не было контактов с
            инфекционными больными.
          </p>
        </div>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Справка 026/у для поступления в школу (ПРИ НАЛИЧИИ ЗАПИСИ
                    ОСМОТРА ЛОР, ХИРУРГА, НЕВРОЛОГА, в течении 6 мес и
                    результатов анализов )
                  </p>
                </td>
                <td>
                  <p>1 500 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Анализ соскоб на энтеробиоз</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
              <tr>
                <td className="px-3">
                  <p className="ms-5">Исследование кала на яйца гельминтов</p>
                </td>
                <td>
                  <p>600 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5">
          <h5>Справка в садик после болезни </h5>
          <p>
            Посещение детского сада так же обязательно, как впоследствии и
            школы. Поэтому при отсутствии ребенка более трех дней нужно
            оформлять соответствующий документ. Такая справка выдается, когда
            малыш пропускает занятия из-за хронического или острого недуга.
            Отсчет дней начинается с даты посещения педиатра. После болезни врач
            осматривает ребенка и выдает справку, убедившись, что он полностью
            здоров и ничем не заразит других детей.
          </p>
          <h5>Можно ли купить медицинскую справку в садик?</h5>
          <p>
            Многие родители не хотят тратить время на оформление документа,
            простаивая в очередях в поликлинике, либо отдают предпочтение
            самолечению. В этих случаях вместо того, чтобы получать справку от
            педиатра для детского сада, ее предпочитают купить, и есть фирмы в
            Томске, которые предоставляют эту услугу. Продаются также документы
            для бассейнов и многие другие.
          </p>
          <p>
            Мы не рекомендуем обращаться к мошенникам и приобретать справки,
            которые могут оказаться недействительными. Не стоит повышать и
            поддерживать спрос на подобные услуги. При любом заболевании ребенка
            нужно показать врачу, а затем после грамотной терапии получить
            справку по необходимой форме.
          </p>
        </div>
        <BlockReklama4 />
        <div className="my-5">
          <h5>Справка после отпуска</h5>
          <p>
            Если вы решили взять ребенка с собой в отпуск или просто устроить
            для него нежданные каникулы, то после перерыва в занятиях
            понадобится справка от педиатра. Он подтверждает, что малыш здоров и
            может снова ходить в детский сад.
          </p>
          <p>
            При отсутствии ребенка до месяца понадобится консультация
            дерматолога, чтобы исключить педикулез и кожные болезни. Если
            перерыв составляет более месяца, то необходимо подтвердить
            отсутствие контакта с инфекционными больными за последние три
            недели, а также сдать соскоб на энтеробиоз и анализ кала на яйца
            гельминтов.
          </p>
          <p>
            <span className="fw-bold"> Важно!</span> Такая справка действительна
            только три дня. Она должна быть предъявлена воспитателю и медсестре
            детского сада в первый же день после отпуска.
          </p>
        </div>
        <div className="block-table my-4">
          <table className="table table-light table-striped text-start ">
            <thead className="table-success px-3">
              <tr>
                <th scope="col">Наименование услуги (прайс не полный)</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3">
                  <p className="ms-5">
                    Прием педиатра, с выдачей медсправки в садик по болезни или
                    после отпуска
                  </p>
                </td>
                <td>
                  <p>1 300 руб.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Container>
  );
}
