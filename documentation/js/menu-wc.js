'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tbay documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3530a5f2ffa4e8dbc516d7dc497aef291066cd8b75a24a6c6f5501bf17cddcfe7e1df7b4d2bb7d4f9ff3ed386c20754d345a1286c4856e1e380357fe779c8750"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3530a5f2ffa4e8dbc516d7dc497aef291066cd8b75a24a6c6f5501bf17cddcfe7e1df7b4d2bb7d4f9ff3ed386c20754d345a1286c4856e1e380357fe779c8750"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3530a5f2ffa4e8dbc516d7dc497aef291066cd8b75a24a6c6f5501bf17cddcfe7e1df7b4d2bb7d4f9ff3ed386c20754d345a1286c4856e1e380357fe779c8750"' :
                                        'id="xs-injectables-links-module-AppModule-3530a5f2ffa4e8dbc516d7dc497aef291066cd8b75a24a6c6f5501bf17cddcfe7e1df7b4d2bb7d4f9ff3ed386c20754d345a1286c4856e1e380357fe779c8750"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-72f1abb4327fa8158da6310c1f3304d6e6edeed45657dc942e006484d8fe753192720e370552c2e226f3d3d88da085eccae59781ffbfa33fbcd11b7f555b7b0d"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-72f1abb4327fa8158da6310c1f3304d6e6edeed45657dc942e006484d8fe753192720e370552c2e226f3d3d88da085eccae59781ffbfa33fbcd11b7f555b7b0d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-72f1abb4327fa8158da6310c1f3304d6e6edeed45657dc942e006484d8fe753192720e370552c2e226f3d3d88da085eccae59781ffbfa33fbcd11b7f555b7b0d"' :
                                        'id="xs-injectables-links-module-AuthModule-72f1abb4327fa8158da6310c1f3304d6e6edeed45657dc942e006484d8fe753192720e370552c2e226f3d3d88da085eccae59781ffbfa33fbcd11b7f555b7b0d"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BcryptProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BcryptProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CartModule.html" data-type="entity-link" >CartModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CartModule-2e66843bc9646ffc8dd55ca8d850553f3d435349d0393a3127dbd817ccf272465a6e10f4e3bb9785ecc7a17884563b945753221f513a28b9ac74ba26bdabff95"' : 'data-bs-target="#xs-injectables-links-module-CartModule-2e66843bc9646ffc8dd55ca8d850553f3d435349d0393a3127dbd817ccf272465a6e10f4e3bb9785ecc7a17884563b945753221f513a28b9ac74ba26bdabff95"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartModule-2e66843bc9646ffc8dd55ca8d850553f3d435349d0393a3127dbd817ccf272465a6e10f4e3bb9785ecc7a17884563b945753221f513a28b9ac74ba26bdabff95"' :
                                        'id="xs-injectables-links-module-CartModule-2e66843bc9646ffc8dd55ca8d850553f3d435349d0393a3127dbd817ccf272465a6e10f4e3bb9785ecc7a17884563b945753221f513a28b9ac74ba26bdabff95"' }>
                                        <li class="link">
                                            <a href="injectables/AddToCartProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddToCartProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CartService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FetchCartProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FetchCartProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RemoveFromCartProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RemoveFromCartProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CategoriesModule-66745b8658c40084abab09fa6d6af360d90ca087c5c170c18585f480e513a9cba1a2f33e01c1da83c4e25c25d69ab889de0642a5cda317301798046eab674182"' : 'data-bs-target="#xs-injectables-links-module-CategoriesModule-66745b8658c40084abab09fa6d6af360d90ca087c5c170c18585f480e513a9cba1a2f33e01c1da83c4e25c25d69ab889de0642a5cda317301798046eab674182"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-66745b8658c40084abab09fa6d6af360d90ca087c5c170c18585f480e513a9cba1a2f33e01c1da83c4e25c25d69ab889de0642a5cda317301798046eab674182"' :
                                        'id="xs-injectables-links-module-CategoriesModule-66745b8658c40084abab09fa6d6af360d90ca087c5c170c18585f480e513a9cba1a2f33e01c1da83c4e25c25d69ab889de0642a5cda317301798046eab674182"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FetchAllCategoriesProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FetchAllCategoriesProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MutateCategoriesProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MutateCategoriesProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrdersModule-aa16fba069c17fe34141909c1c91f76bc37b13c7ab1a97fa50cf7ef9a16e381f7745de3052fa850a1b14548752bb0c21aff95721bde2f28de8005a1d20323ece"' : 'data-bs-target="#xs-injectables-links-module-OrdersModule-aa16fba069c17fe34141909c1c91f76bc37b13c7ab1a97fa50cf7ef9a16e381f7745de3052fa850a1b14548752bb0c21aff95721bde2f28de8005a1d20323ece"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-aa16fba069c17fe34141909c1c91f76bc37b13c7ab1a97fa50cf7ef9a16e381f7745de3052fa850a1b14548752bb0c21aff95721bde2f28de8005a1d20323ece"' :
                                        'id="xs-injectables-links-module-OrdersModule-aa16fba069c17fe34141909c1c91f76bc37b13c7ab1a97fa50cf7ef9a16e381f7745de3052fa850a1b14548752bb0c21aff95721bde2f28de8005a1d20323ece"' }>
                                        <li class="link">
                                            <a href="injectables/CreateOrderProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateOrderProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FetchOrdersProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FetchOrdersProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductRentDetailsModule.html" data-type="entity-link" >ProductRentDetailsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductRentDetailsModule-cca71e86ce36aaf1321dff4f127d0be269f5828798a9064706c639106845c7aa0636864497f7e9e96a21ed641e25e4e4a86fa72d9ceed8310ebf6a8e18d61932"' : 'data-bs-target="#xs-injectables-links-module-ProductRentDetailsModule-cca71e86ce36aaf1321dff4f127d0be269f5828798a9064706c639106845c7aa0636864497f7e9e96a21ed641e25e4e4a86fa72d9ceed8310ebf6a8e18d61932"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductRentDetailsModule-cca71e86ce36aaf1321dff4f127d0be269f5828798a9064706c639106845c7aa0636864497f7e9e96a21ed641e25e4e4a86fa72d9ceed8310ebf6a8e18d61932"' :
                                        'id="xs-injectables-links-module-ProductRentDetailsModule-cca71e86ce36aaf1321dff4f127d0be269f5828798a9064706c639106845c7aa0636864497f7e9e96a21ed641e25e4e4a86fa72d9ceed8310ebf6a8e18d61932"' }>
                                        <li class="link">
                                            <a href="injectables/ProductRentDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductRentDetailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductSaleDetailsModule.html" data-type="entity-link" >ProductSaleDetailsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductSaleDetailsModule-29f4ebee59fccf6430442847d45b590d16de3bd1b28d9aa3ca7b95557f12066dd248d5246d5e8fa1f91421c09c552ce833751edcf3307b3478e6db849e794203"' : 'data-bs-target="#xs-injectables-links-module-ProductSaleDetailsModule-29f4ebee59fccf6430442847d45b590d16de3bd1b28d9aa3ca7b95557f12066dd248d5246d5e8fa1f91421c09c552ce833751edcf3307b3478e6db849e794203"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductSaleDetailsModule-29f4ebee59fccf6430442847d45b590d16de3bd1b28d9aa3ca7b95557f12066dd248d5246d5e8fa1f91421c09c552ce833751edcf3307b3478e6db849e794203"' :
                                        'id="xs-injectables-links-module-ProductSaleDetailsModule-29f4ebee59fccf6430442847d45b590d16de3bd1b28d9aa3ca7b95557f12066dd248d5246d5e8fa1f91421c09c552ce833751edcf3307b3478e6db849e794203"' }>
                                        <li class="link">
                                            <a href="injectables/ProductSaleDetailsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductSaleDetailsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-2c1c79401f352c4bd602d2d216b514563d0c5ac1548b14f449a816f7281fb9bb542240b5b31d453d37d0fde9ea153816d6196734b6c8795b3f845b40c4b2e864"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-2c1c79401f352c4bd602d2d216b514563d0c5ac1548b14f449a816f7281fb9bb542240b5b31d453d37d0fde9ea153816d6196734b6c8795b3f845b40c4b2e864"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-2c1c79401f352c4bd602d2d216b514563d0c5ac1548b14f449a816f7281fb9bb542240b5b31d453d37d0fde9ea153816d6196734b6c8795b3f845b40c4b2e864"' :
                                        'id="xs-injectables-links-module-ProductsModule-2c1c79401f352c4bd602d2d216b514563d0c5ac1548b14f449a816f7281fb9bb542240b5b31d453d37d0fde9ea153816d6196734b6c8795b3f845b40c4b2e864"' }>
                                        <li class="link">
                                            <a href="injectables/CreateProductsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateProductsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeleteProductsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteProductsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FetchAllProductsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FetchAllProductsProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FetchProductsByUserProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FetchProductsByUserProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UpdateProductsProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateProductsProvider</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeedModule.html" data-type="entity-link" >SeedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SeedModule-50ff4dffda495c69146401b2bf04f383c46bf207b3b58197e490ad0de7bd639b3df1ac7c898b147a6c1939e47507926411a97781c46ae68c9d496892a4b92b91"' : 'data-bs-target="#xs-injectables-links-module-SeedModule-50ff4dffda495c69146401b2bf04f383c46bf207b3b58197e490ad0de7bd639b3df1ac7c898b147a6c1939e47507926411a97781c46ae68c9d496892a4b92b91"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeedModule-50ff4dffda495c69146401b2bf04f383c46bf207b3b58197e490ad0de7bd639b3df1ac7c898b147a6c1939e47507926411a97781c46ae68c9d496892a4b92b91"' :
                                        'id="xs-injectables-links-module-SeedModule-50ff4dffda495c69146401b2bf04f383c46bf207b3b58197e490ad0de7bd639b3df1ac7c898b147a6c1939e47507926411a97781c46ae68c9d496892a4b92b91"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SeedService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeedService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-372c99dcecb6dea65b612598dac77b68b2029d54153a0cfb99f0678c48e5068a51a1e0e421491d3209a7bea10b32640d0ae6d162bae7e89b326fd51374e6b14a"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-372c99dcecb6dea65b612598dac77b68b2029d54153a0cfb99f0678c48e5068a51a1e0e421491d3209a7bea10b32640d0ae6d162bae7e89b326fd51374e6b14a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-372c99dcecb6dea65b612598dac77b68b2029d54153a0cfb99f0678c48e5068a51a1e0e421491d3209a7bea10b32640d0ae6d162bae7e89b326fd51374e6b14a"' :
                                        'id="xs-injectables-links-module-UsersModule-372c99dcecb6dea65b612598dac77b68b2029d54153a0cfb99f0678c48e5068a51a1e0e421491d3209a7bea10b32640d0ae6d162bae7e89b326fd51374e6b14a"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddToCartDto.html" data-type="entity-link" >AddToCartDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthResolver.html" data-type="entity-link" >AuthResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartEntity.html" data-type="entity-link" >CartEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItemEntity.html" data-type="entity-link" >CartItemEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartResolver.html" data-type="entity-link" >CartResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoriesResolver.html" data-type="entity-link" >CategoriesResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryEntity.html" data-type="entity-link" >CategoryEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryInput.html" data-type="entity-link" >CreateCategoryInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductsDto.html" data-type="entity-link" >CreateProductsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderEntity.html" data-type="entity-link" >OrderEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrderItemDetailEntity.html" data-type="entity-link" >OrderItemDetailEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrdersResolver.html" data-type="entity-link" >OrdersResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductDetailsDto.html" data-type="entity-link" >ProductDetailsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductEntity.html" data-type="entity-link" >ProductEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductRentDto.html" data-type="entity-link" >ProductRentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductRentEntity.html" data-type="entity-link" >ProductRentEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductRentResolver.html" data-type="entity-link" >ProductRentResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSaleDto.html" data-type="entity-link" >ProductSaleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSaleEntity.html" data-type="entity-link" >ProductSaleEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSaleResolver.html" data-type="entity-link" >ProductSaleResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsResolver.html" data-type="entity-link" >ProductsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenModel.html" data-type="entity-link" >TokenModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryInput.html" data-type="entity-link" >UpdateCategoryInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersResolver.html" data-type="entity-link" >UsersResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/CartValidationGuard.html" data-type="entity-link" >CartValidationGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});