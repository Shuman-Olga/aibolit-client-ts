import { Container, Nav } from "react-bootstrap";
import logo from "../assets/img/aibolit_logo.png";
import { NavLink } from "react-router-dom";
// import ModalCallback from "./modalWindows/ModalCallback";
import vkimg from "../assets/img/vk-img.png";

export function Footer() {
  return (
    <Container id="footer" fluid className="d-flex justify-content-around">
      <div className="block-1">
        <h3 className="mb-5">О Айболите</h3>
        <Nav className="flex-column mt-3">
          <NavLink
            to="/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            Главная
          </NavLink>
          <NavLink
            to="/o-nas/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            О нас
          </NavLink>
          <NavLink
            to="/prices/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            Цены
          </NavLink>
          <NavLink
            to="/programmy-nablyudeniya-za-zdorovem/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            Программы
          </NavLink>
          <NavLink
            to="/uslugi-i-ceny/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            Услуги
          </NavLink>
          <NavLink
            to="/kontakty/"
            className="nav-link"
            target="_top"
            rel="noopener noreferrer"
          >
            Контакты
          </NavLink>
        </Nav>
      </div>
      <div className="text-center">
        <img src={logo} alt="logo" className="w-25 img mb-4" title="logo" />
        <a href="mailto:aibolittom70@gmail.com" target="_self" className="fs-4">
          <p className="email">aibolittom70@gmail.com</p>
        </a>
        <p className="adress">г. Томск, ул. Герцена 68, строение 2</p>
        <a
          href="https://vk.com/aibolittomsk"
          target="_top"
          rel="noopener noreferrer"
        >
          <img src={vkimg} alt="logo-vk" className="img-vk mt-4" title="vk" />
        </a>
        <p className="fw-light mt-4">
          Информация и цены, представленные на сайте, являются справочными и не
          являются публичной офертой.
        </p>
      </div>
      <div className="block-3">
        <h3 className="mb-5">Свяжитесь с нами</h3>
        <div className="my-5 text-center">
          <a href="tel:+7 (3822) 60-92-43" target="_self">
            <p className="phone fs-4">+7 (3822) 60-92-43</p>
          </a>
        </div>
        <div className="mt-3">{/* <ModalCallback /> */}</div>
      </div>
    </Container>
  );
}
