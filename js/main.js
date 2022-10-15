class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="primary-header">
            <div>
                
            </div>
            <div class="logo">
                <img src="../assets/img/OrangeMarketicon.png" alt="OrangeMarketicon">
            </div>
            <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
                <span class="sr-only">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation"  data-visible="false" class="primary-navigation">
                    <li><a href="">Home <span><img src="../assets/img/menu-arrow.svg" alt=""></span></a></li>
                    <li><a href=""> About<span><img src="../assets/img/menu-arrow.svg" alt=""></span></a></li>
                    <li><a href=""> Suppliers<span><img src="../assets/img/menu-arrow.svg" alt=""></span></a></li>
                    <li><a href="">Resources <span><img src="../assets/img/menu-arrow.svg" alt=""></span></a></li>
                    <li><a href="">Blog <span><img src="../assets/img/menu-arrow.svg" alt=""></span></a></li>
                </ul>
            </nav>
    
            <div class="downloadbtn">
                <a href="#">Download the app</a>
            </div>
        </header>
    `
    }
}

customElements.define('my-header',MyHeader)