import React from "react";
import { Container } from "react-bootstrap";

import { SeoPage } from "../../../components/Seo";
import { dataSeoSanatornoKurortnayaKarta } from "../../../data/Seo/dataSeoPages3Level";
import { BlockReklama1 } from "../../../components/reklama/BlockReklama1";
import { BlockReklama2 } from "../../../components/reklama/BlockReklama2";

export function SanatornoKurortnayaKarta() {
  return (
    <Container fluid>
      <SeoPage {...dataSeoSanatornoKurortnayaKarta} />
      <div className="page-h1">
        <Container>
          <h1>Санаторно-курортная карта для детей</h1>
        </Container>
      </div>
      <Container id="santornokurortnyakarta">
        <Container>
          <div className="d-flex mt-4 block-info">
            <div>
              <p>
                Детская санаторно-курортная карта (форма №076/у-04)
                действительна на протяжении двух месяцев. Однако следует
                учитывать, что некоторые лечебные учреждения требуют, чтобы
                документ был оформлен за месяц до поступления ребенка.
              </p>
              <h5>Кто оформляет?</h5>
              <p>
                Оформлением санаторно-курортных карт занимаются участковые
                врачи-педиатры, однако получить для ребенка справку №076/у-04
                можно и в частном медицинском учреждении. «Айболит» имеет
                соответствующую лицензию и выдает документы быстро и без
                очередей.
              </p>
              <p>Карта состоит из двух частей: ​</p>
              <ul>
                <li>
                  до отъезда ребенка педиатр заполняет санаторную справку;
                </li>
                <li>
                  когда срок пребывания на лечении окончен, медицинский работник
                  санатория заполняет обратный талон.
                </li>
              </ul>
              <p>
                <span className="fw-bold"> Внимание!</span> В Интернете можно
                найти много предложений купить ребенку санаторно-курортную
                карту. Мы не рекомендуем пользоваться такими услугами, потому
                что вы можете получить неподлинный документ, с которым не будет
                допуска в санаторий.
              </p>
            </div>
            <div className="ms-4">
              <img
                className="size-img"
                src={require(`../../../assets/img/spravka1.jpg`)}
                alt="img"
                title="img"
              />
            </div>
          </div>
          <BlockReklama1 />
          <div>
            <h5>
              Что нужно для получения санаторно-курортной карты для детей:
            </h5>
            <ul>
              <li>
                путевка в санаторное учреждение (ее номер вносят в графу П26
                бланка карты);
              </li>
              <li>прививочный сертификат для заполнения графы П16;</li>
              <li>полис ОМС для внесения его номера в П7;</li>
              <li>амбулаторная карта ребенка;</li>
              <li>
                справка об инвалидности(если ребенок – инвалид) и СНИЛС. ​
              </li>
            </ul>
            <h5>Информация для сопровождающих</h5>
            <p>
              Иногда вместе с ребенком, проходящим санаторно-курортное лечение
              или реабилитацию, должны или желают находиться родители (опекуны).
              В этом случае взрослые тоже проходят врачебный осмотр и получают
              специальную справку, подтверждающую, что у них не выявлено опасных
              инфекций, передающихся окружающим. ​
            </p>
            <h5>
              Что, помимо санаторной карты по форме №076/у-04, нужно иметь при
              направлении ребенка в санаторий:
            </h5>
            <ul>
              <li>путевка в санаторий;</li>
              <li>полис ОМС;</li>
              <li>
                справку от дерматолога, подтверждающую отсутствие кожных
                инфекций;
              </li>
              <li>
                результат анализа кала на энтеробиоз (результаты исследования
                годны в течении 10 дней.);
              </li>
              <li>
                справку от педиатра либо эпидемиолога о том, что ребенок в
                последние три недели не контактировал с инфекционными больными.
              </li>
            </ul>
            <h5>Особенности санаторно-курортного лечения</h5>
            <p>
              Длительность нахождения ребенка в лечебно-оздоровительном
              учреждении обычно составляет 21 день, иногда – 40 дней. В
              некоторых случаях срок лечения продлевают «на месте», если врачи
              считают, что ребенку это необходимо. Для составления и принятия
              акта о продлении лечения созывается КЭК (клинико-экспертная
              комиссия).
            </p>
            <p>
              Перед отправлением ребенка в санаторий для лечения либо
              профилактики, обязательно нужно проконсультироваться с врачом.
              Смена климата, высоты над уровнем моря и другие факторы могут
              значительно повлиять на самочувствие
            </p>
            <h5>Есть ли противопоказания?</h5>
            <p>
              Да, существует ряд болезней и состояний, которые могут быть
              выявлены в ходе оформления санаторно-курортной карты по форме
              №076/у-04 и являются противопоказаниями для
              лечебно-профилактических мероприятий: ​
            </p>
            <ul>
              <li>период обострения любых заболеваний;</li>
              <li>заразные болезни кожи, глаз и др.;</li>
              <li>если раньше у ребенка были судорожные припадки;</li>
              <li>онкология;</li>
              <li>недавний контакт с инфекционными больными;</li>
              <li>психические расстройства.</li>
            </ul>
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
                      Оформление санаторно-курортная карта (форма №076/у-04)
                      (ПРИ НАЛИЧИИ АНАЛИЗОВ, годны в течении 10 дней)
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
              </tbody>
            </table>
          </div>
          <BlockReklama2 />
        </Container>
      </Container>
    </Container>
  );
}
