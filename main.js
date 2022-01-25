class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    this.activeClass = 'active'

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = '')
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`)
    })
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(this.activeClass)
    this.animateLinks()
  }

  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick)
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent()
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar(
  '.mobile-menu',
  '.nav-list',
  '.nav-list li'
)

mobileNavbar.init()

/* carrossel */
$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
})
/* =======shop cart ========= */

const itens = [
  { id: 0, nome: 'coleira', img: '', qnt: 0 },
  { id: 1, nome: 'guia', img: '', qnt: 0 },
  { id: 2, nome: 'tosa', img: '', qnt: 0 }
]

/* =======Inicilaiza loja ========= */
inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos')
  itens.map(val => {
    containerProdutos.innerHTML +=
      ` 
     <div class="produto-single">
     <img src="` +
      val.img +
      `" />
     <p>` +
      val.nome +
      `</p>
     <a class="link-cart" key="` +
      val.id +
      `" href="#">Adicionar ao carrinho!</a>
     </div>
    `
  })
}

inicializarLoja()

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho')
  containerCarrinho.innerHTML = ''
  itens.map(val => {
    if (val.qnt > 0) {
      containerCarrinho.innerHTML +=
        `
    <p>` +
        val.nome +
        ` | quantidade ` +
        val.qnt +
        `</p>
    <hr>
  `
    }
  })
}
/* ======= armazenar os intens adicionados ========= */
var links = document.getElementsByClassName('link-cart')

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    itens[key].qnt++
    atualizarCarrinho()
    return false
  })
}

/* ======= Modal Sidebar cart ========= */

const carrinho = document.querySelector('.carrinho')
const backdrop = document.querySelector('.backdrop')
const modal_sidebar = document.querySelector('.modal_sidebar')

carrinho.addEventListener('click', () => {
  backdrop.classList.toggle('backdrop-active')
  modal_sidebar.classList.toggle('modal_sidebar_active')
})

backdrop.addEventListener('click', () => {
  backdrop.classList.toggle('backdrop-active')
  modal_sidebar.classList.toggle('modal_sidebar_active')
})
