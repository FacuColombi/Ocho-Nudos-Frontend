import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
const heroImg = "/_app/immutable/assets/logo.6fe82ab7.png";
const hamburgImg = "/_app/immutable/assets/burger-menu-svgrepo-com.830b2f86.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'ul.svelte-tiv0vf li.svelte-tiv0vf{padding:0 .6rem;text-align:center}ul.svelte-tiv0vf a.svelte-tiv0vf{transition:0.4s}ul.svelte-tiv0vf a.svelte-tiv0vf:hover{font-weight:600}.active.svelte-tiv0vf.svelte-tiv0vf{font-weight:600}a.svelte-tiv0vf.svelte-tiv0vf:after{display:block;content:"";border-bottom:solid 3px #b6814f;transform:scaleX(0);transition:transform 250ms ease-in-out}.active.svelte-tiv0vf.svelte-tiv0vf::after{display:block;content:"";border-bottom:solid 3px #b6814f;transform:scaleX(0);transition:transform 250ms ease-in-out;transform:scaleX(1)}a.svelte-tiv0vf.svelte-tiv0vf:hover:after{transform:scaleX(1)}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navType = "" } = $$props;
  let { isLogged = "" } = $$props;
  if ($$props.navType === void 0 && $$bindings.navType && navType !== void 0)
    $$bindings.navType(navType);
  if ($$props.isLogged === void 0 && $$bindings.isLogged && isLogged !== void 0)
    $$bindings.isLogged(isLogged);
  $$result.css.add(css$2);
  return `${navType == "home" ? `<div class="flex justify-between items-center w-full max-w-[1100px] py-6 bg-nav" data-svelte-h="svelte-ziffac"><figure><img class="w-full h-auto max-w-[100px]"${add_attribute("src", heroImg, 0)} alt="Logo de la marca"></figure> <ul class="hidden sm:flex gap-0 text-white font-light md:gap-3 svelte-tiv0vf"><li class="svelte-tiv0vf"><a class="active svelte-tiv0vf" href=" ">Home</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Menú</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Vinos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Eventos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Contacto</a></li></ul></div> ${isLogged ? `<span class="hidden sm:block pr-8 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``} <div class="black sm:hidden py-6 pr-8" data-svelte-h="svelte-1jzg9sb"><img class="max-h-[60px]"${add_attribute("src", hamburgImg, 0)} alt=""></div>` : `${navType === "cart" ? `<div class="flex justify-between w-full max-w-[1100px] py-6" data-svelte-h="svelte-1u7g5kz"><figure><img src="" alt="Logo de la marca"></figure> <ul class="flex gap-2 text-white font-light  svelte-tiv0vf"><li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Home</a></li> <li class="svelte-tiv0vf"><a class="active svelte-tiv0vf" href=" ">Menú</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Vinos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Eventos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Contacto</a></li></ul></div> ${isLogged ? `<span class="py-6 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``}` : `${navType === "wines" ? `<div class="flex justify-between w-full max-w-[1100px] py-6" data-svelte-h="svelte-13xnta3"><figure><img src="" alt="Logo de la marca"></figure> <ul class="flex gap-2 text-white font-light  svelte-tiv0vf"><li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Home</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Menú</a></li> <li class="svelte-tiv0vf"><a class="active svelte-tiv0vf" href=" ">Vinos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Eventos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Contacto</a></li></ul></div> ${isLogged ? `<span class="py-6 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``}` : `${navType == "events" ? `<div class="flex justify-between w-full max-w-[1100px] py-6" data-svelte-h="svelte-1vaz8bb"><figure><img src="" alt="Logo de la marca"></figure> <ul class="flex gap-2 text-white font-light  svelte-tiv0vf"><li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Home</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Menú</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Vinos</a></li> <li class="svelte-tiv0vf"><a class="active svelte-tiv0vf" href=" ">Eventos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Contacto</a></li></ul></div> ${isLogged ? `<span class="py-6 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``}` : `${navType == "contact" ? `<div class="flex justify-between w-full max-w-[1100px] py-6" data-svelte-h="svelte-1klpioh"><figure><img src="" alt="Logo de la marca"></figure> <ul class="flex gap-2 text-white font-light  svelte-tiv0vf"><li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Home</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Menú</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Vinos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Eventos</a></li> <li class="svelte-tiv0vf"><a class="active svelte-tiv0vf" href=" ">Contacto</a></li></ul></div> ${isLogged ? `<span class="py-6 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``}` : `<div class="flex justify-between w-full max-w-[1100px] py-6" data-svelte-h="svelte-e51yeg"><figure><img src="" alt="Logo de la marca"></figure> <ul class="flex gap-2 text-white font-light  svelte-tiv0vf"><li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Home</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Menú</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Vinos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Eventos</a></li> <li class="svelte-tiv0vf"><a href=" " class="svelte-tiv0vf">Contacto</a></li></ul></div> ${isLogged ? `<span class="py-6 text-custom-primary pl-4 font-light">${escape(isLogged)}</span>` : ``}`}`}`}`}`}`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-1q8y4zy:hover{background-color:transparent;border-color:white}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "default" } = $$props;
  let { type = "button" } = $$props;
  let { style = "" } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$1);
  return `<button class="${"border-[1px] py-3 px-5 rounded-none bg-transparent border-white text-white normal-case " + escape(style, true) + " svelte-1q8y4zy"}"${add_attribute("type", type, 0)}>${escape(text)}</button>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { srcInstaIcon = "" } = $$props;
  let { srcFacebookIcon = "" } = $$props;
  if ($$props.srcInstaIcon === void 0 && $$bindings.srcInstaIcon && srcInstaIcon !== void 0)
    $$bindings.srcInstaIcon(srcInstaIcon);
  if ($$props.srcFacebookIcon === void 0 && $$bindings.srcFacebookIcon && srcFacebookIcon !== void 0)
    $$bindings.srcFacebookIcon(srcFacebookIcon);
  return `<div class="max-w-[1100px] w-full text-white pb-10 flex flex-col sm:flex-row mx-[5%] xl:mx-0 justify-between"><article class="my-8"><div class="mb-4"><h3 class="text-lg text-white font-light" data-svelte-h="svelte-noo504">Contactanos</h3> <div class="mt-1 flex gap-2"><img${add_attribute("src", srcInstaIcon, 0)} alt="Instagram Icon"> <img${add_attribute("src", srcFacebookIcon, 0)} alt="Facebook Icon"></div> <p class="text-white text-base" data-svelte-h="svelte-1i54cn8">097 444 070</p></div> <div data-svelte-h="svelte-1ya8mfn"><h3 class="text-lg font-light init">Dirección</h3> <p class="mt-1">Rbla. de los Ingleses esquina, 20200 Piriapolis <br> Departamento de Maldonado</p></div></article> <article class="my-8">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Trabaje con nosotros",
      type: "button",
      style: "text-xs md:text-sm"
    },
    {},
    {}
  )}</article></div>`;
});
const MenuEvents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { text = "" } = $$props;
  let { btnText = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  return `<section class="bg-img-menu h-[100vh] bg-gray-500 flex justify-center"><div class="max-w-[1100px] w-full items-center flex"><article class="max-w-md flex-col"><h2 class="text-5xl mb-4 text-white font-extralight">${escape(title)}</h2> <p class="mb-4 text-white">${escape(text)}</p> ${validate_component(Button, "Button").$$render($$result, { text: btnText }, {}, {})}</article></div></section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.bg-nav.svelte-1r263wr.svelte-1r263wr{background:linear-gradient(#0a0a0a, transparent)}.gallery-custom-grid.svelte-1r263wr.svelte-1r263wr{grid-template-areas:"a a a b"\n    "a a a c"\n    "a a a d"\n    "e e f f"\n    "g g f f"\n    "g g h h"\n    "i i i i"\n    "i i i i"\n    "j k l l"\n    }.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(1){grid-area:a}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(2){grid-area:b}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(3){grid-area:c}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(4){grid-area:d}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(5){grid-area:e}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(6){grid-area:f}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(7){grid-area:g}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(8){grid-area:h}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(9){grid-area:i}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(10){grid-area:j}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(11){grid-area:k}.gallery-custom-grid.svelte-1r263wr figure.svelte-1r263wr:nth-of-type(12){grid-area:l}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="flex justify-center bg-nav items-center absolute w-full svelte-1r263wr">${validate_component(Header, "Header").$$render(
    $$result,
    {
      navType: "home",
      isLogged: "Administrador",
      class: " bg-transparent"
    },
    {},
    {}
  )}</header> <main class="bg-custom-scondary"> <section class="h-[100vh] bg-gray-600 flex justify-center items-center" data-svelte-h="svelte-4uh1p6"><article><h1><figure class="w-80 h-40 bg-cyan-300"><img alt="Ocho Nudos"></figure></h1></article></section>  <section class="w-full bg-custom-scondary flex justify-center items-center min-h-[180px]"><article class="max-w-[1100px] w-full flex gap-20 justify-center items-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Hace una reserva",
      style: "text-lg font-light py-4 px-7",
      type: "button"
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      text: "Marcas amigas",
      style: "text-lg font-light py-4 px-7",
      type: "button"
    },
    {},
    {}
  )}</article></section>  ${validate_component(MenuEvents, "MenuEvents").$$render(
    $$result,
    {
      title: "MENÚ",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus accusantium iste fuga quasi. Dicta, labore porro. Dolore accusamus veritatis esse. Ex assumenda nulla nesciunt magni saepe odit vitae similique. Maxime, impedit ullam.",
      btnText: "Ver menú"
    },
    {},
    {}
  )}   <section class="h-[100vh] bg-gray-300 flex justify-center" data-svelte-h="svelte-964u5p"><div class="max-w-[1100px] w-full flex items-center gap-10 text-center"><article><h3 class="text-2xl font-extralight flex justify-center">Productos naturales</h3> <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!</p></article> <article><h3 class="text-2xl font-extralight flex justify-center">Lugar perfecto</h3> <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!</p></article> <article><h3 class="text-2xl font-extralight flex justify-center">Experiencia única</h3> <p>Lorem ipsum dolor sit amet consectetur adip elit. Dolore at tempore
          repellendus obcaecati illo autem odio nihil rem a. Tempore!</p></article></div></section> <section class="h-[100vh] bg-gray-800" data-svelte-h="svelte-1glj4n6"><div class="grid gallery-custom-grid md:grid-cols-4 w-full h-full svelte-1r263wr"><figure class="bg-red-400  svelte-1r263wr"></figure> <figure class="bg-yellow-400 svelte-1r263wr"></figure> <figure class="bg-green-400 svelte-1r263wr"></figure> <figure class="bg-blue-400 svelte-1r263wr"></figure> <figure class="bg-pink-400 svelte-1r263wr"></figure> <figure class="bg-orange-400 svelte-1r263wr"></figure> <figure class="bg-purple-400 svelte-1r263wr"></figure> <figure class="bg-gray-400 svelte-1r263wr"></figure> <figure class="bg-violet-400 svelte-1r263wr"></figure> <figure class="bg-amber-800 svelte-1r263wr"></figure> <figure class="bg-teal-600 svelte-1r263wr"></figure> <figure class="bg-lime-300 svelte-1r263wr"></figure></div></section></main> <footer class="bg-custom-scondary min-h-[100px] border-t-[1px] border-white flex justify-center">${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      srcInstaIcon: "../img/icons/instagram.svg",
      srcFacebookIcon: "../img/icons/facebook.svg"
    },
    {},
    {}
  )} </footer>`;
});
export {
  Page as default
};
