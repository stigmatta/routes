import './App.css';
import { NavLink, BrowserRouter, Routes, Route } from "react-router-dom";

function NewGoods() {
  return (
    <>
      <h2>НОВИНКИ IKEA, сторінка 1</h2>
      <p>
        У цьому розділі ви знайдете найновіші товари ІКЕА.
        А також тут відображаються всі товари, які є на нашому сайті - в порядку їх додавання.
      </p>
    </>
  );
}

function Sales() {
  return (
    <>
      <h2>АКЦІЇ IKEA, сторінка 1</h2>
      <p>
      Всі товари ІКЕА створюються з однією головною думкою: завдяки низьким цінам красиві і зручні предмети домашнього вжитку можуть бути доступні кожному. Адже наша бізнес- ідея полягає в тому, щоб змінити на краще повсякденне життя багатьох людей
      </p>
    </>
  );
}

function GoodsNow(){
  return(
    <>
      <h2>ТОВАРИ В НАЯВНОСТІ IKEA, сторінка 1</h2>
      <p>
        Товари ІКЕА з цього розділу є в наявності у Львові.

        Замовлені вами товари бронюємо на 24 години, за добу неоплачені замовлення скасовуються. Якщо ви оплатите товар та повідомите нам про це до 12:00, ми зробимо відправку в той же день (тільки у будні). Наступного дня ваше замовлення вже буде в Києві (чи іншому місті, куди НП доставляє за 1 день). 

        Якщо вам потрібні товари з наявності і товари під замовлення (і ви хочете, щоб наявні товари ми відправили одразу), оформлюйте їх в два окремі замовлення.
      </p>
    </>
  );
}

function Payment(){
  return(
    <>
      <h2>Оплата і доставка</h2>
      <p>
            Способи оплати:
      <br/>
      - на сайті
      <br/>

      - на картку/банківський рахунок, реквізити надходять на ел.пошту після оформлення замовлення
      <br/>

      - передоплата 20% вартості замовлення (на картку/банківський рахунок)
      <br/>

      - оплата частинами та оплата в розстрочку (Монобанк, ПриватБанк, А-Банк, Райффайзен Банк та Ощадбанк)
      </p>
    </>
  );
}

function Forums(){
  return(
    <>
    <h2>Форуми</h2>
    </>
  )
}

function AboutUs(){
  return(
    <>
    <h2>Про нас</h2>
    <p>
          Вітаємо Вас в нашому магазині товарів для дому відомого бренду ІКЕА!

      Ми здійснюємо доставку товарів з польської ІКЕА в Україну (у Львів) за цінами, нижчими, ніж пропонуються на ринку. Наша мета - зробити стильні і практичні товари ІКЕА доступними для кожного українця. У нас є немалий досвід в цьому і ми постійно вдосконалюємо якість нашої роботи.

      У нас найширший асортимент товарів ІКЕА в Україні.

      Нас можна знайти у Львові на вул. Пластовій, 7, офіс 205, а також:
    </p>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className = {nav=> (nav.isActive ? "selected":"not-selected")}> НОВИНКИ </NavLink>
            </li>
            <li>
              <NavLink to="/sales" className = {nav=> (nav.isActive ? "selected":"not-selected")}>АКЦІЇ</NavLink>
            </li>
            <li>
              <NavLink to="/goodsnow" className = {nav=> (nav.isActive ? "selected":"not-selected")}>ТОВАРИ В НАЯВНОСТІ</NavLink>
            </li>
            <li>
              <NavLink to="/payment" className = {nav=> (nav.isActive ? "selected":"not-selected")}>ДОСТАВКА І ОПЛАТА</NavLink>
            </li>
            <li>
              <NavLink to="/forums" className = {nav=> (nav.isActive ? "selected":"not-selected")}>ФОРУМИ</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className = {nav=> (nav.isActive ? "selected":"not-selected")}>ПРО НАС</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<NewGoods />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/goodsnow" element={<GoodsNow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/aboutus" element={<AboutUs />} />


         

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
