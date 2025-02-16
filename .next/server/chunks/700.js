exports.id = 700;
exports.ids = [700];
exports.modules = {

/***/ 92758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'0c269b91fb006feeaed9f05f6e56f6755bac6476': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 32123)).then(mod => mod["sendEmail"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '0c269b91fb006feeaed9f05f6e56f6755bac6476': endpoint.bind(null, '0c269b91fb006feeaed9f05f6e56f6755bac6476'),
}


/***/ }),

/***/ 14121:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76551))

/***/ }),

/***/ 84737:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 25865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94783);
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9025);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73787);



function __build_action__(action, args) {
  return callServer(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ sendEmail */ 

var sendEmail = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("0c269b91fb006feeaed9f05f6e56f6755bac6476");



/***/ }),

/***/ 36382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useBooleanValue),
/* harmony export */   c: () => (/* binding */ BooleanProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ BooleanProvider,useBooleanValue auto */ 

const CartBoolContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const BooleanProvider = ({ children })=>{
    const [isBooleanValue, setBooleanValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartBoolContext.Provider, {
        value: {
            isBooleanValue,
            setBooleanValue
        },
        children: children
    });
};
const useBooleanValue = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartBoolContext);
};


/***/ }),

/***/ 51799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CartProvider),
/* harmony export */   j: () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ 

const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return action.payload; // Assuming action.payload is the updated cart array
        case "UPDATE_CART":
            return action.payload; // Assuming action.payload is the updated cart array
        case "REMOVE_FROM_CART":
            return state.filter((item)=>item.id !== action.payload);
        case "CLEAR_CART":
            return []; // Return an empty array to clear the cart
        default:
            return state;
    }
};
const CartProvider = ({ children })=>{
    const [cart, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, [], (initial)=>{
        if (false) {}
    });
    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const storedQuantities = localStorage.getItem("quantities");
        return storedQuantities ? JSON.parse(storedQuantities) : {};
    });
    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [
        cart
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        localStorage.setItem("quantities", JSON.stringify(quantities));
    }, [
        quantities
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Calculate subtotal whenever quantities change
        const newSubtotal = cart.reduce((acc, item)=>{
            const quantity = quantities[item.id] || 1;
            return acc + item.price * quantity;
        }, 0);
        setSubtotal(newSubtotal);
    }, [
        quantities,
        cart
    ]);
    const addToCart = (item, quantity = {})=>{
        const existingCartItemIndex = cart.findIndex((cartItem)=>String(cartItem.id) === String(item.id));
        if (existingCartItemIndex !== -1) {
            setQuantities((prevQuantities)=>({
                    ...prevQuantities,
                    [item.id]: (prevQuantities[item.id] || 0) + quantity
                }));
            dispatch({
                type: "UPDATE_CART",
                payload: cart.map((cartItem)=>String(cartItem.id) === String(item.id) ? {
                        ...cartItem,
                        quantity: (cartItem.quantity || 0) + quantity
                    } : cartItem)
            });
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: [
                    ...cart,
                    {
                        ...item,
                        quantity
                    }
                ]
            });
            setQuantities((prevQuantities)=>({
                    ...prevQuantities,
                    [item.id]: quantity
                }));
        }
    };
    const removeFromCart = (itemId)=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: itemId
        });
        setQuantities((prevQuantities)=>{
            const { [itemId]: removedItem, ...newQuantities } = prevQuantities;
            return newQuantities;
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: "CLEAR_CART"
        });
        setQuantities({});
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            quantities,
            subtotal
        },
        children: children
    });
};
const useCart = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};



/***/ }),

/***/ 76551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./components/index.ts + 4 modules
var components = __webpack_require__(69135);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(71338);
// EXTERNAL MODULE: ./app/custom.css
var custom = __webpack_require__(96577);
// EXTERNAL MODULE: ./app/bootstrap.min.css
var bootstrap_min = __webpack_require__(84986);
// EXTERNAL MODULE: ./app/bs-select.css
var bs_select = __webpack_require__(56812);
// EXTERNAL MODULE: ./app/slick.css
var slick = __webpack_require__(38604);
// EXTERNAL MODULE: ./app/context/CartContext.js
var CartContext = __webpack_require__(51799);
// EXTERNAL MODULE: ./app/context/CartBoolContext.js
var CartBoolContext = __webpack_require__(36382);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./components/GifLoader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

const GifLoader = ()=>{
    const [showGif, setShowGif] = (0,react_experimental_.useState)(true);
    (0,react_experimental_.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            setShowGif(false);
        }, 2000);
        // Cleanup the timeout when the component unmounts
        return ()=>clearTimeout(timeoutId);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showGif && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "9999999999"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "5em",
                    zIndex: "9999999999"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/load.gif",
                    alt: "Loading"
                })
            })
        })
    });
};
/* harmony default export */ const components_GifLoader = (GifLoader);

;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        className: "no-js no-touch supports-no-cookies",
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "text/html; charset=utf-8",
                        httpEquiv: "Content-Type"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "en",
                        httpEquiv: "Content-Language"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "IE=edge",
                        httpEquiv: "X-UA-Compatible"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1, maximum-scale=1",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "max-image-preview:large",
                        name: "robots"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Anazon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "At Anazon, we're reshaping the way businesses connect.",
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "Anazon",
                        name: "keywords",
                        property: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "Anazon",
                        name: "",
                        property: "og:title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "https://bellroy.com/collection/slim-your-wallet",
                        name: "",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "website",
                        name: "",
                        property: "og:type"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "At Anazon, we're reshaping the way businesses connect.",
                        name: "",
                        property: "og:description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "/logo.png",
                        name: "",
                        property: "og:image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "apple-touch-icon",
                        sizes: "180x180"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "icon",
                        sizes: "32x32"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "icon",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "#ffffff",
                        name: "msapplication-TileColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "#ffffff",
                        name: "theme-color"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://assets.bellroy.com",
                        rel: "preconnect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://bellroy.imgix.net",
                        rel: "preconnect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "css/webfonts-3e3c2400.css",
                        rel: "preload",
                        as: "style"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/webfonts-3e3c2400.css",
                        media: "print"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/style-4109db2b.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.cdnfonts.com/css/lato",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_GifLoader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(CartBoolContext/* BooleanProvider */.c, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CartContext/* CartProvider */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* Navbar2 */.lH, {}),
                                children,
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* Footer */.$_, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 69135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _h: () => (/* reexport */ components_CarCard),
  $_: () => (/* reexport */ components_Footer),
  lH: () => (/* reexport */ Navbar2)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./app/api/sendEmail/sendEmail.ts
var sendEmail = __webpack_require__(25865);
;// CONCATENATED MODULE: ./components/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Footer = ()=>{
    const [isFoot1, setIsFoot1] = (0,react_experimental_.useState)(true);
    const [isFoot2, setIsFoot2] = (0,react_experimental_.useState)(true);
    const [isFoot3, setIsFoot3] = (0,react_experimental_.useState)(true);
    const handleFoot = ()=>{
        var d2 = document.getElementById("footId1");
        setIsFoot1(!isFoot1);
        if (d2) {
            if (isFoot1) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    const handleFoot2 = ()=>{
        var d2 = document.getElementById("footId2");
        setIsFoot2(!isFoot2);
        if (d2) {
            if (isFoot2) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    const handleFoot3 = ()=>{
        var d2 = document.getElementById("footId3");
        setIsFoot3(!isFoot3);
        if (d2) {
            if (isFoot3) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        "data-roybell": "",
        "data-location": "footer",
        id: "SiteFooter",
        className: "SiteFooter hide",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: '.NewsletterSignupModalWrapper{z-index:9999999999999;display:none;position:fixed;top:0;right:0;bottom:0;left:0}.NewsletterSignupModalWrapper_Backdrop{opacity:0;transition:opacity .3s ease;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);z-index:1}.NewsletterSignupModal{opacity:0;transition:opacity .3s ease;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:346px;max-height:477px;min-height:477px;width:calc(100vw - 40px);height:calc(100vh - 40px);z-index:2;background-color:#f4f4f4}.NewsletterSignupModal img{object-fit:cover;width:100%;position:absolute;bottom:-1px}.NewsletterSignupModal_Close{position:absolute;z-index:2;top:15px;right:11px;width:20px;height:20px;background:none;border:none;cursor:pointer;outline:none}.NewsletterSignupModal_Close:before,.NewsletterSignupModal_Close:after{content:\'\';position:absolute;width:23px;height:1px;background:#231f20;top:50%;left:50%}.NewsletterSignupModal_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.NewsletterSignupModal_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.NewsletterSignupModal_Inner{padding:58px 18px 0 18px}.NewsletterSignupModal_Inner .NewsletterSignup_InputWrapper_Front{border:1px solid #ccc}.NewsletterSignupModal_Inner_Disclaimer a,.NewsletterSignupModal_Inner_Disclaimer a:hover,.NewsletterSignupModal_Inner_Disclaimer a:visited,.NewsletterSignupModal_Inner_Disclaimer a:focus{text-decoration:underline;color:#ab695d}@media (min-width: 1000px){.NewsletterSignupModal{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:800px;max-height:376px;min-height:auto;width:800px;height:376px;z-index:2}.NewsletterSignupModal_Inner_Preheading,.NewsletterSignupModal_Inner_Heading,.NewsletterSignupModal_Inner_Disclaimer{text-align:left}.NewsletterSignupModal img{max-height:550px;width:unset;height:112%;position:absolute;bottom:0}.NewsletterSignupModal_Inner{padding:0 70px 0 0;position:absolute;left:376px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}.NewsletterSignupModal_Inner_Disclaimer{text-align:left}}@media (min-width: 1280px){.NewsletterSignupModal{max-width:1040px;max-height:490px;width:1040px;height:490px}.NewsletterSignupModal_Inner{left:490px}.NewsletterSignupModal_Inner_Heading{line-height:3.5rem;font-size:2.75rem}}.NewsletterSignupModalWrapper.active{display:block}.NewsletterSignupModalWrapper.show .NewsletterSignupModalWrapper_Backdrop,.NewsletterSignupModalWrapper.show .NewsletterSignupModal{opacity:1}.pageHeaderMenuOverlay.pageHeaderMenuOverlays--newsletter.open{display:none !important}.NewsletterSignupModal_Component{position:relative;font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;max-width:100% !important}.NewsletterSignupModal_Component .klaviyo_helptext{font-family:"PT Serif", serif;padding-top:10px}.NewsletterSignupModal_Component .klaviyo_gdpr_text{font-family:"PT Serif", serif;font-size:14px;line-height:1.3}.NewsletterSignupModal_Component label{color:#222}.NewsletterSignupModal_Component .klaviyo_field_group{display:flex;transform-style:preserve-3d;backface-visibility:hidden;transition:transform .4s ease, background-color .4s ease;height:42px;border-radius:4px;margin:0;background-color:#fff;border:1px solid #FFF;padding:3px;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModal_Component .klaviyo_field_group .klaviyo_form_actions{text-align:left}.NewsletterSignupModal_Component input[type=checkbox]+label{display:inline;font-weight:normal;padding-left:5px}.NewsletterSignupModal_Component input[type=text],.NewsletterSignupModal_Component input[type=email]{font-family:Lato, sans-serif;font-size:12px;font-weight:700;border-radius:0px;border:none;outline:none;transition:background .1s ease}.NewsletterSignupModal_Component input[type=email]::placeholder{color:#b0b0b0;letter-spacing:0.5px}.NewsletterSignupModal_Component input[type=email]:focus+.klaviyo_form_actions .klaviyo_submit_button,.NewsletterSignupModal_Component input[type=email]:valid+.klaviyo_form_actions .klaviyo_submit_button{background:#ab695d}.NewsletterSignupModal_Component .klaviyo_submit_button{font-family:"Lato", sans-serif;font-size:12px;font-weight:700;background:#d7d7d7;text-align:center;padding:0 5px;min-width:64px;outline:none;border:0;border-radius:4px;color:#fff;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer}.NewsletterSignupModal_Component .klaviyo_messages{margin-top:5px;font-family:"Lato", sans-serif;font-size:12px;font-weight:normal}.NewsletterSignupModal_Component .klaviyo_messages .error_message{display:flex;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;color:#c43e22;letter-spacing:.5px;text-align:left;margin-top:10px}.NewsletterSignupModal_Component .klaviyo_messages .error_message:before{display:inline-block;content:"\\2191";font-size:10px;padding:0 5px}.NewsletterSignupModal_Component .klaviyo_messages .success_message{color:#ab695d;background-color:#fff;padding:9px;border-radius:3px;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;text-align:center;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4429/newsletter-sign-up-image-mobile.jpg?auto=format&fit=max")}@media (min-width: 1000px){.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4430/iphone-sign-up-image-desktop.jpg?auto=format&fit=max")}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: ".NewsletterSignupFooter{display:block;background:#f4f4f4;padding:20px 15px}.NewsletterSignupFooter_Component{margin:20px auto;min-height:42px;max-width:454px}.NewsletterSignupFooter_Disclaimer{max-width:454px;margin:0 auto}.NewsletterSignupFooter_Disclaimer a,.NewsletterSignupFooter_Disclaimer a:hover,.NewsletterSignupFooter_Disclaimer a:visited,.NewsletterSignupFooter_Disclaimer a:active{color:#ab695d}@media (min-width: 1280px){.NewsletterSignupFooter_Heading{line-height:2.5rem;font-size:1.75rem}}\n"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "NewsletterSignupFooter",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "NewsletterSignupFooter_Heading br_text-2xl-serif br_text-center ",
                        children: "Get exclusive access to new products, deals & surprise treats."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "NewsletterSignupFooter_Component",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                type: "text/css",
                                dangerouslySetInnerHTML: {
                                    __html: '\n      .NewsletterSignupFooter_Component {\n        position: relative;\n        font-family: "Lato", sans-serif;\n        -webkit-font-smoothing: antialiased;\n     text-align: center;      }\n\n      .NewsletterSignupFooter_Component .klaviyo_helptext {\n        font-family: "PT Serif", serif;\n        padding-top: 10px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_gdpr_text {\n        font-family: "PT Serif", serif;\n        font-size: 14px;\n        line-height: 1.3;\n      }\n\n      .NewsletterSignupFooter_Component label {\n        color:#222;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group {\n        display: inline-flex;\n        transform-style: preserve-3d;\n        backface-visibility: hidden;\n        transition: transform .4s ease, background-color .4s ease;\n        height: 42px;\n        border-radius: 4px;\n        margin: 0;\n        background-color: #fff;\n        border: 1px solid #FFF;\n        padding: 3px;\n        box-shadow: 0 17px 9px -15px rgb(0 0 0 / 50%);\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_field_group .klaviyo_form_actions {\n        text-align:left;\n       }\n\n      .NewsletterSignupFooter_Component input[type=checkbox] + label {\n        display: inline;\n        font-weight:normal;\n        padding-left:5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=text], .NewsletterSignupFooter_Component input[type=email] {\n        font-family: Lato, sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        border-radius: 0px;\n        border: none;\n        outline: none;\n        transition: background .1s ease;\n width: 250px;      }\n\n      .NewsletterSignupFooter_Component input[type=email]::placeholder {\n        color: #b0b0b0;\n        letter-spacing: 0.5px;\n      }\n\n      .NewsletterSignupFooter_Component input[type=email]:focus + .klaviyo_form_actions .klaviyo_submit_button,\n      .NewsletterSignupFooter_Component input[type=email]:valid + .klaviyo_form_actions .klaviyo_submit_button {\n        background: #ab695d;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_submit_button {\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        background: #d7d7d7;\n        text-align: center;\n        padding: 0 5px;\n        min-width: 64px;\n        outline: none;\n        border: 0;\n        border-radius: 4px;\n        color: #fff;\n        text-transform: uppercase;\n        letter-spacing: 1.5px;\n        cursor: pointer;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages {\n        margin-top: 5px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: normal;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message {\n        display: flex;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        color: #c43e22;\n        letter-spacing: .5px;\n        text-align: left;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .error_message:before {\n        display: inline-block;\n        content: "\\2191";\n        font-size: 10px;\n        padding: 0 5px;\n      }\n\n      .NewsletterSignupFooter_Component .klaviyo_messages .success_message {\n        color: #ab695d;\n        background-color: #fff;\n        padding: 9px;\n        border-radius: 3px;\n        font-family: "Lato", sans-serif;\n        font-size: 12px;\n        font-weight: 700;\n        text-align: center;\n      }\n    '
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                action: async (formData)=>{
                                    await (0,sendEmail/* sendEmail */.C)(formData);
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "klaviyo_field_group",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "email-input",
                                            type: "email",
                                            name: "email",
                                            id: "k_id_email",
                                            placeholder: "Enter your email to register",
                                            required: true
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "klaviyo_form_actions",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "klaviyo_submit_button",
                                                style: {
                                                    padding: "0.5em"
                                                },
                                                children: "Submit"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "NewsletterSignupFooter_Disclaimer br_text-xs-sans-spaced br_text-grey-400 br_text-center",
                        children: [
                            "You are signing up to receive product updates and newsletters. By signing up, you are consenting to our",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/privacy",
                                "data-auto-id": "true",
                                id: "page-footer-customer-care-privacy-policy-1",
                                children: "privacy policy"
                            }),
                            " ",
                            "but you can opt out at any time."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "SiteFooter__wrapper",
                id: "footer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "SiteFooterSitemap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                "data-roybell": "",
                                "data-location": "footerSocial",
                                className: "SiteFooterSitemap__social column",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.tiktok.com/@anazon.lb",
                                                "data-auto-id": "true",
                                                id: "page-footer-http-www-instagram-com-bellroy-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 2500 2500",
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    xmlSpace: "preserve",
                                                    height: "20px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "TikTok"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M2202.4 0H297.6C133.5 0 0 133.5 0 297.6v1904.8C0 2366.5 133.5 2500 297.6 2500h1904.8c164.1 0 297.6-133.5 297.6-297.6V297.6C2500 133.5 2366.5 0 2202.4 0m-237.8 1090.7c-13.7 1.3-27.4 2-41.1 2.1-150.4 0-290.7-75.8-373.2-201.7v686.7c0 280.3-227.2 507.6-507.6 507.6s-507.6-227.2-507.6-507.6 227.2-507.6 507.6-507.6c10.6 0 21 1 31.4 1.6V1322c-10.4-1.2-20.7-3.2-31.4-3.2-143.1 0-259 116-259 259s116 259 259 259c143.1 0 269.5-112.7 269.5-255.8l2.5-1166.3H1554c22.6 214.6 195.6 382.2 410.8 397.9v278"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.instagram.com/anazon.lb/",
                                                "data-auto-id": "true",
                                                id: "page-footer-http-www-instagram-com-bellroy-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 44 44",
                                                    height: "20px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "Instagram"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M21.3,14.4c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9c3.8,0,6.9-3.1,6.9-6.9c0,0,0,0,0,0 C28.3,17.5,25.2,14.4,21.3,14.4C21.3,14.4,21.3,14.4,21.3,14.4z"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M43.9,12.9c0-1.8-0.4-3.6-1-5.3c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-2-3.9-2.5c-1.7-0.6-3.5-1-5.3-1   C28.7,0,28,0,22,0s-6.7,0-9.1,0.1c-1.8,0-3.6,0.4-5.3,1C6.1,1.7,4.8,2.6,3.7,3.7c-1.1,1.1-2,2.4-2.5,3.9c-0.6,1.7-1,3.5-1,5.3   C0,15.3,0,16,0,22s0,6.7,0.1,9.1c0,1.8,0.4,3.6,1,5.3c0.6,1.5,1.4,2.8,2.5,3.9c1.1,1.1,2.4,2,3.9,2.5c1.7,0.6,3.5,1,5.3,1   C15.3,44,16,44,22,44s6.7,0,9.1-0.1c1.8,0,3.6-0.4,5.3-1c1.5-0.6,2.8-1.4,3.9-2.5c1.1-1.1,2-2.4,2.5-3.9c0.6-1.7,1-3.5,1-5.3   C44,28.7,44,28,44,22S44,15.3,43.9,12.9z M21.3,32c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.7,10.7-10.7S32,15.4,32,21.3S27.2,32,21.3,32   L21.3,32z M35.3,13.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C38.7,11.8,37.2,13.3,35.3,13.3   C35.3,13.3,35.3,13.3,35.3,13.3z"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.facebook.com/anazon.lb",
                                                "data-auto-id": "true",
                                                id: "page-footer-https-www-facebook-com-bellroy-official-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 44 44",
                                                    height: "20px",
                                                    style: {
                                                        marginRight: "-10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "Facebook"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M14.3,44V23.9h6.5l1-7.8h-7.5v-5c0-2.3,0.6-3.8,3.7-3.8h4v-7C20.1,0.1,18.1,0,16.2,0c-5.8,0-9.7,3.7-9.7,10.3 v5.8H0v7.8h6.5V44H14.3z"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://wa.me/96176839590",
                                                "data-auto-id": "true",
                                                id: "page-footer-https-www-youtube-com-channel-ucy6vodc_wyzj4rlslixgp1q-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    id: "Layer_1",
                                                    "data-name": "Layer 1",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 176 124",
                                                    height: "22px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "WhatsApp"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            fill: "#000000",
                                                            viewBox: "0 0 16 16",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_bgCarrier",
                                                                    "stroke-width": "0"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_tracerCarrier",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                    id: "SVGRepo_iconCarrier",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId1",
                                onClick: handleFoot,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "HELP",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/contact",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-contact-us-1",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/term",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-terms-conditions-1",
                                                    children: "Terms & Conditions"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/privacy",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-privacy-policy-2",
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId2",
                                onClick: handleFoot2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "Shop Collections",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Appliances",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-collection-new-releases-1",
                                                    children: "Appliances"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Fashion",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-collection-bestsellers-1",
                                                    children: "Fashion"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Household",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-coming-soon-1",
                                                    children: "Household"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Picnic Items",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-collection-premium-1",
                                                    children: "Picnic Items"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId3",
                                onClick: handleFoot3,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "ABOUT",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/about",
                                                "data-auto-id": "true",
                                                id: "page-footer-about-us-1",
                                                children: "Our Story"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column ",
                                children: "  "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "SiteFooter__footNote",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "SiteFooter__footNote__inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://greatplacetowork.com.au/gptwcertified/bellroy/",
                                        "data-auto-id": "true",
                                        id: "page-footer-https-greatplacetowork-com-au-gptwcertified-bellroy-1"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "column",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "question",
                                                children: [
                                                    "Got a question?",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "Contact",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:info@anazon-lb.com",
                                                                "data-auto-id": "true",
                                                                id: "page-footer-mailto-support-bellroy-com-1",
                                                                children: "info@anazon-lb.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "column",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "copyright",
                                                children: [
                                                    "All rights reserved \xa9 ",
                                                    new Date().getFullYear(),
                                                    " Anazon"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/CarCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const CarCard = ({ temp })=>{
    const { id, title, category, type, img } = temp;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "Layout br_contents",
            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "br_contents br_edition-",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "br_aspect-[4/5] sm:br_aspect-square",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "br_w-full br_h-full br_relative br_flex br_items-center br_justify-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4",
                                            alt: "Slim Sleeve - Cocoa-Java",
                                            loading: "lazy",
                                            sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw",
                                            src: `api/proxy?url=${img[0]}`
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: `/product?id=${id}`,
                                            className: "br_text-current br_no-underline",
                                            children: [
                                                title,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "br_absolute br_inset-0 br_z-10"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "br_text-base-sans-bold-spaced br_text-grey-600 br_inline-flex br_flex-wrap br_gap-x-2 br_items-baseline apex:br_text-white group-[.centered]/tile:br_justify-center",
                                        children: type
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "br_text-base-sans-bold-cta-uppercase ",
                                        children: "Shop now >"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_CarCard = (CarCard);

// EXTERNAL MODULE: ./app/context/CartContext.js
var CartContext = __webpack_require__(51799);
// EXTERNAL MODULE: ./app/context/CartBoolContext.js
var CartBoolContext = __webpack_require__(36382);
;// CONCATENATED MODULE: ./components/Cart.js





const Cart = ()=>{
    const { cart, removeFromCart, quantities, subtotal, addToCart } = (0,CartContext/* useCart */.j)();
    const [localQuantities, setLocalQuantities] = (0,react_experimental_.useState)(quantities);
    const { isBooleanValue, setBooleanValue } = (0,CartBoolContext/* useBooleanValue */.I)();
    const [errors, setErrors] = (0,react_experimental_.useState)({});
    const handleRemoveFromCart = (itemId)=>{
        removeFromCart(itemId);
    };
    const handleQuantityChange = (itemId, quantity)=>{
        addToCart(cart.find((item)=>item.id === itemId), undefined, quantity);
        // Update localQuantities immediately (local state)
        setLocalQuantities((prevQuantities)=>({
                ...prevQuantities,
                [itemId]: quantity
            }));
    };
    (0,react_experimental_.useEffect)(()=>{
        // Update quantities in the context when localQuantities change
        setLocalQuantities(quantities);
    }, [
        quantities
    ]);
    const handleClickc = ()=>{
        var cartb = document.getElementById("cartid");
        var cartb2 = document.getElementById("cartid2");
        setBooleanValue(!isBooleanValue);
        if (cartb && cartb2) {
            if (isBooleanValue) {
                cartb2.className += " MiniCart_Cart-visible";
            } else {
                cartb2.classList.remove("MiniCart_Cart-visible");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "MiniCart_Slider_Overlay",
                        id: "cartid"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "MiniCart_Slider",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "MiniCart_Slider_CloseButton",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("slot", {
                                    name: "close-button"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("slot", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("template", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "Checkout",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "cartid2",
                    className: "MiniCart_Cart ",
                    style: {
                        zIndex: "99999999"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "MiniCart_Cart_Heading br_text-grey-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/checkout",
                                    className: "MiniCart_CartIndicator",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        viewBox: "0 0 31 28",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: 13,
                                                cy: 24,
                                                r: 2
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: 24,
                                                cy: 24,
                                                r: 2
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M1.5 2h3s1.5 0 2 2l4 13s.4 1 1 1h13s3.6-.3 4-4l1-5s0-1-2-1h-19"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Your shopping cart"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    slot: "close-button",
                                    className: "MiniCart_Cart_CloseButton",
                                    "aria-label": "Close",
                                    id: "cartid",
                                    style: {
                                        zIndex: "99999999999"
                                    },
                                    onClick: handleClickc,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "MiniCart_Cart_CloseButtonIcon"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-render-if": "!cart-is-empty",
                            className: "MiniCart_Cart_CheckoutCart",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "Checkout_Cart_Wrapper Checkout_Cart_Wrapper--All",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "Checkout_Cart_TableHeading",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "Checkout_Cart_TableHeading_Quantity",
                                                    children: "Qty"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "Checkout_Cart_TableHeading_Total",
                                                    children: "Total price"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "Checkout_Cart_LineItems",
                                            children: [
                                                cart && cart.length > 0 ? (cart?.map((obj, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "Checkout_Cart_LineItems_LineItem",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Thumb",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: `api/proxy?url=${obj.img[0]}`,
                                                                        alt: ""
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Details",
                                                                    children: [
                                                                        obj.title,
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Category:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: obj.category
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Type:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: obj.type
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Details_Quantity",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Qty:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: localQuantities[obj.id] || 1
                                                                                })
                                                                            ]
                                                                        }),
                                                                        errors[obj.id] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: [
                                                                                errors[obj.id],
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    style: {
                                                                                        color: "#4acb4a",
                                                                                        display: "inline"
                                                                                    },
                                                                                    href: `/product?id=${obj.id}&&custom=1`,
                                                                                    children: " add now"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Price",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "Currency",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "Currency_Monetary",
                                                                                        children: [
                                                                                            "$",
                                                                                            obj.price * localQuantities[obj.id] || obj.price
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "Currency_Code",
                                                                                        children: "USD"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Remove",
                                                                    onClick: ()=>handleRemoveFromCart(obj.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Remove_Cross",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Remove_Spinner",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }))) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "data-render-if": "cart-is-empty",
                                                    className: "MiniCart_Cart_EmptyCart",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "You have no items in your shopping cart."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "Checkout_Cart_LineItems_LineItem Checkout_Cart_LineItems_LineItem-SalesPromotion Checkout_Cart_LineItems_LineItem-SalesPromotion-Custom",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "Checkout_Cart_LineItems_LineItem_ContentBlock"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "Checkout_Cart_LineItems_LineItem_Details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Price",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "Currency",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "Currency_Monetary",
                                                                                children: [
                                                                                    "Total: $",
                                                                                    subtotal
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "Currency_Code",
                                                                                children: "USD"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    class: "Common_Button Common_Button--short MiniCart_Cart_CtaButton",
                                    href: "/checkout",
                                    rel: "nofollow",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Go to checkout"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-render-if": "cart-is-empty",
                            className: "MiniCart_Cart_SupportedPaymentTypes",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "br_text-base-sans-stretched",
                                    children: "We accept:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "MiniCart_Cart_SupportedPaymentTypes_Icons",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "data-render-if": "credit-card-is-supported:Visa",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: 38,
                                                height: 27,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                    transform: "translate(.28 .28)",
                                                    fill: "none",
                                                    fillRule: "evenodd",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            stroke: "#D0D1D0",
                                                            strokeWidth: ".57",
                                                            fill: "#FFF",
                                                            fillRule: "nonzero",
                                                            width: "36.85",
                                                            height: "25.51",
                                                            rx: "1.89"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            stroke: "#D0D1D0",
                                                            strokeWidth: ".57",
                                                            fill: "#FFF",
                                                            fillRule: "nonzero",
                                                            width: "36.85",
                                                            height: "25.51",
                                                            rx: "1.89"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            fill: "#0967B2",
                                                            d: "M16.74 16.9h-1.91l1.19-7.31h1.91zM13.23 9.58l-1.82 5-.21-1.09-.64-3.29a.82.82 0 0 0-.91-.66h-3v.13a7.12 7.12 0 0 1 2 .83l1.65 6.36h2l3-7.32-2.07.04ZM28.21 16.9h1.75l-1.52-7.32h-1.53a.87.87 0 0 0-.88.55l-2.84 6.77h2l.4-1.09h2.42l.2 1.09Zm-2.09-2.59 1-2.74.6 2.74h-1.6ZM23.33 11.34l.28-1.57a5.51 5.51 0 0 0-1.72-.32c-.94 0-3.19.42-3.19 2.43 0 2.01 2.64 1.91 2.64 2.9s-2.37.82-3.15.19l-.28 1.64a5.26 5.26 0 0 0 2.15.42c1.3 0 3.26-.68 3.26-2.51 0-1.83-2.66-2.08-2.66-2.9 0-.82 1.86-.73 2.67-.28"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "m11.2 13.53-.64-3.29a.82.82 0 0 0-.91-.66h-3v.13a7.36 7.36 0 0 1 2.82 1.42 5.67 5.67 0 0 1 1.76 2.4",
                                                            fill: "#FAA633"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "data-render-if": "credit-card-is-supported:MasterCard",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "38px",
                                                height: "27px",
                                                viewBox: "0 0 38 27",
                                                version: "1.1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                    stroke: "none",
                                                    strokeWidth: 1,
                                                    fill: "none",
                                                    fillRule: "evenodd",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            stroke: "#D0D1D0",
                                                            strokeWidth: "0.57",
                                                            fill: "#FFFFFF",
                                                            fillRule: "nonzero",
                                                            x: "0.28",
                                                            y: "0.28",
                                                            width: "36.85",
                                                            height: "25.51",
                                                            rx: "1.89"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                            x: "0.28",
                                                            y: "0.28",
                                                            width: "36.85",
                                                            height: "25.51",
                                                            rx: "1.89"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                                                            fill: "#EB610A",
                                                            fillRule: "nonzero",
                                                            cx: "18.7",
                                                            cy: "11.17",
                                                            rx: "2.72",
                                                            ry: "5.62"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M16,11.18 C15.9942777,8.99258414 16.9887783,6.92254951 18.7,5.56 C15.7672233,3.23954079 11.5426141,3.56700003 9.00244801,6.31167971 C6.46228192,9.0563594 6.46228192,13.2936406 9.00244801,16.0383203 C11.5426141,18.783 15.7672233,19.1104592 18.7,16.79 C16.987971,15.4324744 15.9928906,13.3649184 16,11.18 L16,11.18 Z",
                                                            fill: "#E30D17",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M11.08,20.22 C11.0128659,20.1518761 10.9306533,20.1004933 10.84,20.07 C10.744791,20.0308869 10.6429287,20.0105144 10.54,20.01 L10.36,20.01 C10.2969772,20.0194216 10.2360711,20.0397236 10.18,20.07 C10.1170221,20.0912064 10.0591336,20.1252584 10.01,20.17 C9.95234952,20.2166486 9.90472837,20.2744743 9.87,20.34 C9.80152446,20.2396086 9.71299853,20.1544875 9.61,20.09 C9.49203471,20.0309152 9.36193487,20.0001021 9.23,20 L9.08,20 L8.93,20.05 L8.79,20.13 C8.74212707,20.1692966 8.70151254,20.2166802 8.67,20.27 L8.67,20.04 L8.27,20.04 L8.27,22 L8.67,22 L8.67,20.91 C8.66663816,20.7701376 8.71670176,20.6342507 8.81,20.53 C8.86553667,20.4857353 8.93056832,20.4549308 9,20.44 C9.06290276,20.4295559 9.12709724,20.4295559 9.19,20.44 C9.30819025,20.4311826 9.42345146,20.479518 9.5,20.57 C9.58033845,20.6720517 9.61957849,20.8004737 9.61,20.93 L9.61,22 L10,22 L10,20.91 C9.98490346,20.8374436 9.98490346,20.7625564 10,20.69 C10.0197353,20.6292858 10.0540735,20.5743447 10.1,20.53 C10.1423206,20.4887432 10.1936813,20.4579267 10.25,20.44 C10.3096213,20.4304665 10.3703787,20.4304665 10.43,20.44 C10.5510868,20.4311623 10.6693828,20.4792201 10.75,20.57 C10.8303385,20.6720517 10.8695785,20.8004737 10.86,20.93 L10.86,22 L11.26,22 L11.26,20.77 C11.2850017,20.668179 11.2850017,20.561821 11.26,20.46 C11.2124096,20.3714039 11.1517269,20.2904937 11.08,20.22 L11.08,20.22 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M13.2,20.29 C13.1343061,20.2078305 13.0526689,20.1397995 12.96,20.09 C12.8503601,20.0387174 12.731032,20.0114424 12.61,20.01 C12.3527568,20.0073418 12.1061513,20.1125118 11.93,20.3 C11.839802,20.3861009 11.7712667,20.4923305 11.73,20.61 C11.6299052,20.8707232 11.6299052,21.1592768 11.73,21.42 C11.7737393,21.5364425 11.8419391,21.6421521 11.93,21.73 C12.1128751,21.9063151 12.355997,22.0064241 12.61,22.01 C12.7315503,22.0133156 12.8519603,21.9857933 12.96,21.93 C13.0567868,21.8865392 13.1397983,21.8173629 13.2,21.73 L13.2,22 L13.62,22 L13.62,20.1 L13.2,20.1 L13.2,20.29 Z M13.2,21.29 C13.1719075,21.3601142 13.1312396,21.424505 13.08,21.48 C13.0315152,21.5373811 12.969715,21.5820146 12.9,21.61 C12.7469697,21.6767879 12.5730303,21.6767879 12.42,21.61 C12.350285,21.5820146 12.2884848,21.5373811 12.24,21.48 C12.1908058,21.422963 12.1503638,21.3589298 12.12,21.29 C12.0666667,21.1344444 12.0666667,20.9655556 12.12,20.81 C12.1503638,20.7410702 12.1908058,20.677037 12.24,20.62 C12.2884848,20.5626189 12.350285,20.5179854 12.42,20.49 C12.5730303,20.4232121 12.7469697,20.4232121 12.9,20.49 C12.969715,20.5179854 13.0315152,20.5626189 13.08,20.62 C13.1312396,20.675495 13.1719075,20.7398858 13.2,20.81 C13.2533333,20.9655556 13.2533333,21.1344444 13.2,21.29 L13.2,21.29 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M15.52,21 C15.379767,20.8966872 15.2135867,20.8343696 15.04,20.82 L14.84,20.82 L14.72,20.82 C14.6869181,20.8257905 14.6530819,20.8257905 14.62,20.82 C14.5923124,20.8057244 14.5683422,20.7851785 14.55,20.76 C14.5443223,20.7336355 14.5443223,20.7063645 14.55,20.68 C14.5461505,20.6136605 14.5813073,20.5511595 14.64,20.52 C14.7182132,20.4723387 14.8084298,20.4480496 14.9,20.45 L15.08,20.45 L15.24,20.45 L15.38,20.5 L15.49,20.56 L15.67,20.23 C15.5579542,20.1698406 15.4408367,20.1196474 15.32,20.08 C15.180388,20.0652593 15.039612,20.0652593 14.9,20.08 C14.7904913,20.0652975 14.6795087,20.0652975 14.57,20.08 C14.4822448,20.1071655 14.4006948,20.1513384 14.33,20.21 C14.2612327,20.2585396 14.2061289,20.3239754 14.17,20.4 C14.1301645,20.4772875 14.1095811,20.5630514 14.11,20.65 C14.1089555,20.7924491 14.1712371,20.928003 14.28,21.02 C14.4169983,21.1291458 14.585015,21.1921521 14.76,21.2 L14.96,21.2 C15.0468864,21.2079924 15.1315965,21.2317113 15.21,21.27 C15.2599512,21.2988363 15.2905163,21.3523252 15.29,21.41 C15.2868467,21.4824126 15.2447623,21.5474521 15.18,21.58 C15.0777676,21.6304431 14.9634455,21.6512289 14.85,21.64 L14.64,21.64 L14.48,21.59 C14.4294946,21.58052 14.3816962,21.560035 14.34,21.53 L14.23,21.46 L14.03,21.77 C14.0976489,21.8196397 14.1716395,21.8599982 14.25,21.89 L14.47,21.97 L14.68,21.97 L14.85,21.97 C14.9728909,21.9847732 15.0971091,21.9847732 15.22,21.97 C15.3170645,21.9432003 15.4085195,21.8991664 15.49,21.84 C15.559417,21.7893478 15.6173488,21.7246005 15.66,21.65 C15.6987781,21.5723235 15.7193,21.4868152 15.72,21.4 C15.7269944,21.2410514 15.6513555,21.0897736 15.52,21 L15.52,21 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M19.41,20.29 C19.3291371,20.2004294 19.2303293,20.1288789 19.12,20.08 C19.0061609,20.0319274 18.8835583,20.008088 18.76,20.01 C18.6266323,20.0070869 18.4940297,20.0308873 18.37,20.08 C18.2579263,20.1309373 18.1562214,20.2021308 18.07,20.29 C17.9882553,20.3808546 17.9238577,20.4859243 17.88,20.6 C17.7870085,20.8654241 17.7870085,21.1545759 17.88,21.42 C17.9212128,21.5406078 17.989648,21.6501042 18.08,21.74 C18.1713375,21.8236428 18.2761445,21.8912602 18.39,21.94 C18.5140297,21.9891127 18.6466323,22.0129131 18.78,22.01 C18.9188862,22.0104477 19.0570661,21.9902263 19.19,21.95 C19.3281938,21.9102185 19.4549921,21.8382519 19.56,21.74 L19.35,21.45 C19.190713,21.5700219 18.9991756,21.6396719 18.8,21.65 C18.7370308,21.6596052 18.6729692,21.6596052 18.61,21.65 C18.5485666,21.6300296 18.4910516,21.5995805 18.44,21.56 C18.3891295,21.517065 18.3452688,21.4664565 18.31,21.41 C18.2719043,21.3422092 18.2480824,21.2673404 18.24,21.19 L19.64,21.19 C19.64,21.19 19.64,21.14 19.64,21.12 L19.64,21 C19.6420067,20.8601971 19.6182785,20.7212177 19.57,20.59 C19.5315586,20.4827428 19.4776563,20.3816759 19.41,20.29 L19.41,20.29 Z M18.25,20.85 C18.2559305,20.7843173 18.2728314,20.7200937 18.3,20.66 C18.3250137,20.6049275 18.3587845,20.5542713 18.4,20.51 C18.4451123,20.4698611 18.4955978,20.4362041 18.55,20.41 C18.6163129,20.4002869 18.6836871,20.4002869 18.75,20.41 C18.8690483,20.4015178 18.9858835,20.445331 19.07,20.53 C19.1603163,20.6259342 19.216543,20.7489301 19.23,20.88 L18.25,20.85 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M24.92,20.29 C24.7762609,20.106117 24.553261,20.0020503 24.32,20.01 C24.0657271,20.0076761 23.8223371,20.113024 23.65,20.3 C23.5611061,20.3891896 23.4898574,20.4943663 23.44,20.61 C23.3500951,20.8725158 23.3500951,21.1574842 23.44,21.42 C23.4910502,21.534976 23.5621593,21.6399466 23.65,21.73 C23.7345518,21.8198195 23.8366652,21.8912989 23.95,21.94 C24.065888,21.9928161 24.1928273,22.0168317 24.32,22.01 C24.440724,22.0168511 24.5611975,21.9927564 24.67,21.94 C24.7656648,21.890407 24.850617,21.8224452 24.92,21.74 L24.92,22 L25.33,22 L25.33,20.1 L24.92,20.1 L24.92,20.29 Z M24.92,21.29 C24.8995821,21.3614436 24.8617907,21.4267196 24.81,21.48 C24.7558174,21.5353891 24.6912552,21.5795632 24.62,21.61 C24.5474697,21.6419453 24.4692467,21.6589502 24.39,21.66 C24.3075255,21.6589543 24.2260307,21.6419762 24.15,21.61 C24.0774169,21.5820355 24.0123593,21.5375223 23.96,21.48 C23.9138362,21.4226622 23.8767384,21.3585841 23.85,21.29 C23.7966667,21.1344444 23.7966667,20.9655556 23.85,20.81 C23.8767384,20.7414159 23.9138362,20.6773378 23.96,20.62 C24.0123593,20.5624777 24.0774169,20.5179645 24.15,20.49 C24.3009968,20.4303921 24.4690032,20.4303921 24.62,20.49 C24.6912552,20.5204368 24.7558174,20.5646109 24.81,20.62 C24.8617907,20.6732804 24.8995821,20.7385564 24.92,20.81 C24.9560308,20.8689698 24.9829984,20.9330179 25,21 C24.9939968,21.0818558 24.9771841,21.1625568 24.95,21.24 L24.92,21.29 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M17.3,21.58 C17.2341774,21.5950024 17.1658226,21.5950024 17.1,21.58 L16.99,21.58 C16.9533691,21.5660951 16.9195071,21.545778 16.89,21.52 C16.8662157,21.4855279 16.8461061,21.4486602 16.83,21.41 C16.820296,21.3537488 16.820296,21.2962512 16.83,21.24 L16.83,20.42 L17.49,20.42 L17.49,20.04 L16.83,20.04 L16.83,19.46 L16.41,19.46 L16.41,20.04 L16,20.04 L16,20.42 L16.38,20.42 L16.38,21.25 C16.3635271,21.4531318 16.4282557,21.6545094 16.56,21.81 C16.6953521,21.9353363 16.8758175,22.0003038 17.06,21.99 C17.1719306,22.0127253 17.2869272,22.0161076 17.4,22 L17.57,21.92 L17.43,21.57 C17.3872578,21.5787743 17.3435813,21.5821341 17.3,21.58 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M21.05,19.9999964 C20.9405081,19.9996853 20.8319407,20.0200417 20.73,20.06 C20.6312649,20.1187692 20.5487692,20.2012649 20.49,20.3 L20.49,20.05 L20.12,20.05 L20.12,21.9999964 L20.5,21.9999964 L20.5,20.9999964 C20.4896062,20.927035 20.4896062,20.852965 20.5,20.78 C20.5200753,20.721662 20.5505692,20.6674506 20.59,20.62 C20.6317392,20.5756868 20.683042,20.5414849 20.74,20.52 C20.7995438,20.5095364 20.8604562,20.5095364 20.92,20.52 C20.9728851,20.5102215 21.0271149,20.5102215 21.08,20.52 L21.17,20.52 L21.29,20.12 L21.19,20.12 L21.05,19.9999964 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M26.81,19.9999964 C26.7005081,19.9996853 26.5919407,20.0200417 26.49,20.06 C26.3965627,20.1220479 26.3180175,20.2040081 26.26,20.3 L26.26,20.05 L25.88,20.05 L25.88,21.9999964 L26.26,21.9999964 L26.26,20.9999964 C26.2449035,20.9274436 26.2449035,20.8525564 26.26,20.78 C26.2800753,20.721662 26.3105692,20.6674506 26.35,20.62 C26.389801,20.5779729 26.4373362,20.5440192 26.49,20.52 C26.5496213,20.5104665 26.6103787,20.5104665 26.67,20.52 C26.7262512,20.510296 26.7837488,20.510296 26.84,20.52 L26.92,20.52 L27.04,20.12 L27,19.9999964 L26.81,19.9999964 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M28.75,19.29 L28.75,20.29 C28.6042538,20.1086577 28.382603,20.0052206 28.15,20.01 C27.8932395,20.0097388 27.6475471,20.1145194 27.47,20.3 C27.3863572,20.3913375 27.3187398,20.4961445 27.27,20.61 C27.1699052,20.8707232 27.1699052,21.1592768 27.27,21.42 C27.3212229,21.532517 27.3886002,21.6369519 27.47,21.73 C27.6485717,21.9127931 27.8944912,22.0140541 28.15,22.01 C28.270724,22.0168511 28.3911975,21.9927564 28.5,21.94 C28.5956648,21.890407 28.680617,21.8224452 28.75,21.74 L28.75,22 L29.16,22 L29.16,19.29 L28.75,19.29 Z M28.75,21.29 C28.7295083,21.3637354 28.6877755,21.4298123 28.63,21.48 C28.5815152,21.5373811 28.519715,21.5820146 28.45,21.61 C28.3774697,21.6419453 28.2992467,21.6589502 28.22,21.66 C28.1374114,21.6600287 28.0557062,21.6430068 27.98,21.61 C27.910285,21.5820146 27.8484848,21.5373811 27.8,21.48 C27.7508058,21.422963 27.7103638,21.3589298 27.68,21.29 C27.6266667,21.1344444 27.6266667,20.9655556 27.68,20.81 C27.7103638,20.7410702 27.7508058,20.677037 27.8,20.62 C27.8484848,20.5626189 27.910285,20.5179854 27.98,20.49 C28.1309968,20.4303921 28.2990032,20.4303921 28.45,20.49 C28.519715,20.5179854 28.5815152,20.5626189 28.63,20.62 C28.6847751,20.6726983 28.7259521,20.7378951 28.75,20.81 C28.8033333,20.9655556 28.8033333,21.1344444 28.75,21.29 L28.75,21.29 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M22,20.57 C22.0549548,20.5155383 22.1193294,20.4714925 22.19,20.44 C22.2663126,20.4295795 22.3436874,20.4295795 22.42,20.44 L22.42,20.44 C22.5060057,20.4248632 22.5939943,20.4248632 22.68,20.44 C22.7556788,20.4675731 22.8240776,20.5120324 22.88,20.57 L23.08,20.23 C23.0061599,20.1681029 22.9213586,20.1206142 22.83,20.09 C22.5677346,19.9799957 22.2722654,19.9799957 22.01,20.09 C21.7688012,20.1822337 21.5768109,20.3706016 21.48,20.61 C21.3795934,20.8672153 21.3795934,21.1527847 21.48,21.41 C21.5768109,21.6493984 21.7688012,21.8377663 22.01,21.93 C22.2722654,22.0400043 22.5677346,22.0400043 22.83,21.93 C22.9213586,21.8993858 23.0061599,21.8518971 23.08,21.79 L22.88,21.45 C22.8263566,21.5085188 22.7568782,21.5502059 22.68,21.57 C22.5969842,21.6019533 22.508946,21.6188837 22.42,21.62 L22.42,21.62 C22.3407533,21.6189502 22.2625303,21.6019453 22.19,21.57 C22.1178951,21.5459521 22.0526983,21.5047751 22,21.45 C21.9446109,21.3958174 21.9004368,21.3312552 21.87,21.26 C21.8102716,21.0986846 21.8102716,20.9213154 21.87,20.76 C21.9004368,20.6887448 21.9446109,20.6241826 22,20.57 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M30,21.68 L30.07,21.68 L30.14,21.68 L30.14,21.74 C30.1456777,21.7663645 30.1456777,21.7936355 30.14,21.82 C30.1448559,21.8430807 30.1448559,21.8669193 30.14,21.89 L30.14,21.95 L30.07,21.95 L30,21.95 L29.92,21.95 C29.8691336,21.9367582 29.8280153,21.8993779 29.81,21.85 C29.8005542,21.8276226 29.8005542,21.8023774 29.81,21.78 C29.7999593,21.7542785 29.7999593,21.7257215 29.81,21.7 L29.81,21.64 C29.8759916,21.6196342 29.9478209,21.6347562 30,21.68 Z M30,22 L30.05,22 C30.05,22 30.05,22 30.05,22 C30.0538381,21.9835543 30.0538381,21.9664457 30.05,21.95 C30.0546785,21.9302736 30.0546785,21.9097264 30.05,21.89 C30.05,21.89 30.05,21.89 30.05,21.89 C30.05,21.89 30.05,21.89 30.05,21.89 L30,21.89 C30,21.89 30,21.89 30,21.89 L30,21.89 C30,21.89 30,21.89 30,21.95 C30.0009698,21.9666526 30.0009698,21.9833474 30,22 L30,22 L30,22 Z M30,21.77 C30.0158727,21.7627247 30.0341273,21.7627247 30.05,21.77 L30.05,21.77 L30.05,21.77 L30.1,21.83 L30.04,21.83 L30.04,21.77 L30.04,21.77 L30.04,22 L30,22 L30,21.83 L30,21.77 Z",
                                                            fill: "#1D1D1B",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M29.82,15.05 L29.82,14.84 L29.74,14.84 L29.74,14.78 L30,14.78 L30,14.84 L29.91,14.84 L29.91,15.05 L29.82,15.05 Z M30.27,15.05 L30.27,14.86 L30.21,15.02 L30.14,15.02 L30.08,14.86 L30.08,15.05 L30,15.05 L30,14.78 L30.09,14.78 L30.16,14.95 L30.23,14.78 L30.32,14.78 L30.32,15.05 L30.27,15.05 Z",
                                                            fill: "#F69F00",
                                                            fillRule: "nonzero"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M23.14,3.99998907 C21.5256902,3.99998907 19.9596164,4.55036507 18.7,5.56 C21.7985973,8.01076902 22.3266477,12.5081475 19.88,15.61 C19.5356336,16.0494284 19.1394284,16.4456336 18.7,16.79 C21.1647453,18.7426963 24.6142113,18.8615539 27.2075188,17.0831422 C29.8008263,15.3047304 30.9327418,12.0441001 29.999195,9.04135426 C29.0656482,6.0386084 26.2845131,3.99453654 23.14,3.99998907 Z",
                                                            fill: "#F69F00",
                                                            fillRule: "nonzero"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            "data-render-if": "googlepay-available",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: 39,
                                                height: 27,
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                    fillRule: "nonzero",
                                                    fill: "none",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M5 1h28.9c2.2 0 4 1.8 4 4v17.6c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V5c0-2.2 1.8-4 4-4Z",
                                                            stroke: "#D0D1D0",
                                                            strokeWidth: ".57",
                                                            fill: "#FFF"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                            fill: "#000",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M18.662 13.864v2.948h-.919v-7.28h2.435c.617 0 1.143.209 1.573.628.44.419.66.93.66 1.535 0 .619-.22 1.13-.66 1.545-.426.414-.952.619-1.573.619h-1.516v.005Zm0-3.436v2.539h1.535c.363 0 .67-.127.908-.375.244-.249.369-.551.369-.892 0-.336-.125-.634-.369-.882a1.18 1.18 0 0 0-.908-.385h-1.535v-.005ZM24.812 11.666c.679 0 1.215.185 1.607.555.392.37.588.877.588 1.52v3.07h-.875v-.691h-.038c-.378.57-.885.853-1.516.853-.54 0-.99-.161-1.354-.488a1.569 1.569 0 0 1-.545-1.218c0-.517.191-.926.574-1.228.382-.307.894-.458 1.53-.458.545 0 .995.102 1.344.307v-.215c0-.326-.124-.599-.378-.828a1.282 1.282 0 0 0-.89-.341c-.511 0-.917.22-1.214.663l-.808-.517c.445-.658 1.105-.984 1.975-.984Zm-1.186 3.616c0 .243.1.448.306.609.2.16.44.244.713.244.387 0 .731-.147 1.033-.44.3-.291.454-.633.454-1.027-.287-.23-.684-.346-1.196-.346-.373 0-.684.092-.932.273-.254.19-.378.419-.378.687ZM32 11.826 28.94 19h-.948l1.138-2.51-2.018-4.664h1l1.453 3.577h.02L31 11.826z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M15.022 13.269c0-.305-.027-.597-.077-.878h-3.849V14h2.217c-.09.535-.38.991-.823 1.295v1.044h1.32c.77-.727 1.212-1.801 1.212-3.07Z",
                                                            fill: "#4285F4"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M12.49 15.295c-.367.253-.84.4-1.393.4-1.069 0-1.975-.733-2.3-1.723H7.436v1.076c.674 1.364 2.06 2.3 3.661 2.3 1.107 0 2.037-.371 2.713-1.01l-1.32-1.043Z",
                                                            fill: "#34A853"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M8.669 13.174c0-.278.045-.546.128-.799V11.3H7.436A4.217 4.217 0 0 0 7 13.174c0 .674.157 1.31.436 1.875l1.36-1.076a2.56 2.56 0 0 1-.127-.799Z",
                                                            fill: "#FABB05"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M11.097 10.652c.604 0 1.145.212 1.572.626l1.17-1.19A3.896 3.896 0 0 0 11.096 9c-1.6 0-2.987.936-3.661 2.3l1.36 1.075c.326-.989 1.232-1.723 2.301-1.723Z",
                                                            fill: "#E94235"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Cart = (Cart);

;// CONCATENATED MODULE: ./components/Navbar2.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function NavBar() {
    const [isActive, setIsActive] = (0,react_experimental_.useState)(true);
    const { isBooleanValue, setBooleanValue } = (0,CartBoolContext/* useBooleanValue */.I)();
    const [isActive2, setIsActive2] = (0,react_experimental_.useState)(true);
    const { cart } = (0,CartContext/* useCart */.j)();
    const [isHovered, setIsHovered] = (0,react_experimental_.useState)(true);
    // Function to handle hover
    const handleHover = ()=>{
        setIsHovered(!isHovered);
        var d = document.getElementById("myUniD");
        var d1 = document.getElementById("yourDivId");
        if (d && d1) {
            if (isHovered) {
                d.className += " br_submenu-open";
                d1.className += " br_open";
            } else {
                d.classList.remove("br_submenu-open");
                d1.classList.remove("br_open");
            }
        }
    };
    const handleClick = ()=>{
        var d = document.getElementById("myUniD");
        var d1 = document.getElementById("hamburger");
        setIsActive(!isActive);
        if (d && d1) {
            if (isActive) {
                d.className += " drawer-active br_open";
                d1.className += " open";
            } else {
                d.classList.remove("drawer-active");
                d.classList.remove("br_open");
                d1.classList.remove("open");
            }
        }
    // setIsActive(current => !current);
    };
    const handleClickc = ()=>{
        var cartb = document.getElementById("cartid");
        var cartb2 = document.getElementById("cartid2");
        setBooleanValue(!isBooleanValue);
        if (cartb && cartb2) {
            if (isBooleanValue) {
                cartb2.className += " MiniCart_Cart-visible";
            } else {
                cartb2.classList.remove("MiniCart_Cart-visible");
            }
        }
    };
    const handleClickc2 = ()=>{
        var search = document.getElementById("search-menu-overlay");
        var searchc = document.getElementById("search-menu-overlay");
        setIsActive2(!isActive2);
        if (search && searchc) {
            if (isActive2) {
                search.className += " open";
            } else {
                search.classList.remove("open");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'html,body{margin:0;padding:0}#topBannerWrapper{position:relative}#topBannerWrapper>a,.topBannerRotating>a{display:block;text-decoration:none;text-align:center}.topBannerRotating{min-height:30px;background-color:#231f20}.topBannerRotating .topBanner{position:absolute;width:100%;height:100%;animation-timing-function:ease-in-out;animation-iteration-count:infinite;z-index:1;opacity:0;display:flex;justify-content:center;align-items:center}.topBanner{font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;background-color:#231f20;color:#cecdca;position:relative;height:auto;overflow:hidden}.topBanner_Close{display:block;border:none;background:none;position:absolute;top:50%;right:0;height:32px;width:32px;cursor:pointer;z-index:2;transform:translateY(-50%)}.topBanner_Close:before,.topBanner_Close:after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.topBanner_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.topBanner_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.topBanner_Inner{display:flex}.topBanner_Inner_Icon{position:absolute;top:50%;left:5px;transform:translateY(-50%);padding:0 4px;display:flex;flex-direction:column;justify-content:center}.topBanner_Inner_Icon svg{height:24px;width:auto;max-width:24px;max-height:24px}.topBanner_Inner_Title{padding:0 5px}.topBanner_Inner_Cta{text-transform:uppercase;letter-spacing:1px;color:#ab695d;font-weight:bold}.topBanner_Inner{box-sizing:border-box;flex:1 1 auto;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;margin:0 42px;font-size:12px;font-weight:bold;line-height:18px;padding:6px 0;letter-spacing:1px}@media (min-width: 768px){.topBanner_Inner{display:flex;justify-content:center}.topBanner_Inner_Icon{position:static;top:auto;left:auto;transform:none;padding:0 4px;flex:0 1 auto}.topBanner_Inner{flex:0 1 auto;margin:0 20px;font-size:13px;line-height:18px;padding:6px 0}}@keyframes rotate--2{0%,50%,100%{opacity:0;z-index:1}3%,47%{opacity:1;z-index:2}}@keyframes rotate--3{0%,34%,100%{opacity:0;z-index:1}2%,32%{opacity:1;z-index:2}}.topBannerRotating--2 .topBanner{animation-name:rotate--2;animation-duration:6.8s}.topBannerRotating--3 .topBanner{animation-name:rotate--3;animation-duration:10.2s}.topBannerRotating .topBanner:nth-child(1){animation-delay:0s}.topBannerRotating .topBanner:nth-child(2){animation-delay:3.4s}.topBannerRotating .topBanner:nth-child(3){animation-delay:6.8s}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#ab695d}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #ab695d;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#ab695d}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#ab695d}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #ab695d;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#ab695d}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: ".MiniCart_Cart_Heading{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;line-height:30px;font-size:12px;letter-spacing:0.5px;text-transform:none;min-height:73px;border-bottom:none;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;background-color:white}.MiniCart_Cart_Heading a{pointer-events:none;max-height:24px}.MiniCart_Cart_Heading bellroy-cart-indicator{padding-top:25px;max-height:24px}.MiniCart_Cart_CloseButton{position:absolute;right:0;padding:20px 25px;border:none;font-family:'Lato', sans-serif;font-weight:700;font-size:12px;line-height:15px;color:#676767;background-color:transparent;cursor:pointer;-webkit-font-smoothing:antialiased;letter-spacing:1px}.MiniCart_Cart_CloseButton>span{margin-right:15px}.MiniCart_Cart_CloseButtonIcon{width:15px;height:15px}.MiniCart_Cart_CloseButtonIcon:before,.MiniCart_Cart_CloseButtonIcon:after{display:block;content:' ';border-left:1px solid #676767;position:absolute;right:50%;top:20px;height:15px}.MiniCart_Cart_CloseButtonIcon:before{transform:rotate(45deg)}.MiniCart_Cart_CloseButtonIcon:after{transform:rotate(-45deg)}.MiniCart_Cart_CloseButton:focus{outline:none}\n"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n                .MiniCart_Slider_Overlay {\n                    width: 100vw;\n                    height: 100vh;\n                    position: fixed;\n                    top: 0;\n                    bottom: 0;\n                    left: 0;\n                    right: 0;\n                    z-index: 1000000000;\n                    background-color: #000;\n                    opacity: 0;\n                    pointer-events: none;\n                }\n                .MiniCart_Slider_Overlay-visible {\n                    opacity: 0.4;\n                    pointer-events: all;\n                    transition: opacity 200ms ease-in;\n                }\n                .MiniCart_Slider {\n                    position: fixed;\n                    right: 0;\n                    bottom: 0;\n                    top: 0;\n                    width: 435px;\n                    max-width: 90vw;\n                    z-index: 1000000000;\n                    opacity: 0;\n                    pointer-events: none;\n                    transform: translateX(100%);\n                    transition: all 200ms linear;\n                }\n                .MiniCart_Slider-visible {\n                    transform: translateX(0);\n                    transition: all 500ms linear;\n                    opacity: 1;\n                    pointer-events: all;\n                }\n                .MiniCart_Slider_CloseButton {\n                    position: absolute;\n                    right: 0;\n                    top: 0;\n                    z-index: 200;\n                }\n            "
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cart, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pageHeaderContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pageHeaderMenuOverlays",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pageHeaderMenuOverlay pageHeaderMenuOverlays--search",
                            id: "search-menu-overlay",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "pageHeaderMenuOverlay__close js-close-overlay",
                                    "aria-label": "close",
                                    onClick: handleClickc2
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "/search",
                                    method: "get",
                                    className: "searchOverlay",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 35.6 36",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            className: "searchInputWrapper",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    name: "q",
                                                    placeholder: "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "searchInputWrapper__underline"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pageHeaderMenuPreHeader",
                        id: "PageMenuPreHeader",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "br_absolute br_left-1/2 br_top-1/2 br_-translate-y-1/2 br_-translate-x-1/2 xl:pointer-fine:br_absolute xl:pointer-fine:br_left-8 xl:pointer-fine:br_top-6 xl:pointer-fine:br_p-0 xl:pointer-fine:br_m-0 xl:pointer-fine:br_transform-none all-link-states:br_text-grey-600",
                                "data-roybell": "",
                                "data-location": "homePageLogoLink",
                                "data-auto-id": "true",
                                id: "page-header-homepage-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "api/proxy?url=https://ucarecdn.com/13ff6806-3fbb-48c9-832b-c8a76aaedf2b/logo.png",
                                    alt: "",
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                id: "hamburger",
                                className: "hamburger xl:pointer-fine:br_invisible",
                                onClick: handleClick,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shippingMessage"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                type: "text/css",
                                dangerouslySetInnerHTML: {
                                    __html: '.mobileNewsletter{position:absolute;top:15px;left:62px}.menuicon{position:relative}.menuicon .indicator{position:absolute;top:-14px;right:-9px;border-radius:50%;background-color:#ab695d;color:#fff;font-size:10px;height:12px;line-height:13px;text-indent:1px;white-space:nowrap;min-width:12px;text-align:center;font-family:"Lucida Console", Monaco, monospace;border:2px solid #fff;box-sizing:content-box}@media (min-width: 768px){.mobileNewsletter{display:none}.menuicon .indicator{top:-17px}}\n'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobileNewsletter",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "js-open-newsletter",
                                    "data-auto-id": "true",
                                    id: "page-header-newsletter-1",
                                    onClick: handleClickc,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "menuicon",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "64px",
                                                height: "64px",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                stroke: "#999999",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        id: "SVGRepo_bgCarrier",
                                                        "stroke-width": "0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        id: "SVGRepo_tracerCarrier",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                        id: "SVGRepo_iconCarrier",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",
                                                                stroke: "#00055",
                                                                "stroke-width": "2",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            cart && cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "MiniCart_CartIndicator_Badge1"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "secondaryLevel",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mobile-hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "secondaryLevel_Item br_no-underline js-open-newsletter",
                                                "data-auto-id": "true",
                                                onClick: handleClickc,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "menuicon",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "64px",
                                                            height: "64px",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            stroke: "#999999",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_bgCarrier",
                                                                    "stroke-width": "0"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_tracerCarrier",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                    id: "SVGRepo_iconCarrier",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",
                                                                            stroke: "#00055",
                                                                            "stroke-width": "2",
                                                                            "stroke-linecap": "round",
                                                                            "stroke-linejoin": "round"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        cart && cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "MiniCart_CartIndicator_Badge1"
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: handleClickc2,
                                                className: "js-open-search secondaryLevel_Item",
                                                "data-auto-id": "true",
                                                id: "page-header-search-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "menuicon",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 31 27",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                cx: "13.7",
                                                                cy: "11.1",
                                                                r: 9
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M20.1 17.5l6.8 6.8"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "myUniD",
                        style: {
                            background: "white"
                        },
                        className: "pageHeaderMenu br_group/menu br_z-50 br_pointer-events-none br_relative br_w-screen br_h-screen br_inset-0 br_overflow-hidden br_bg-black/25 br_opacity-0 br_transition-opacity br_ease-in-out br_duration-300 open:br_opacity-100 open:br_pointer-events-auto xl:pointer-fine:br_h-[75px] xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_opacity-100 xl:pointer-fine:br_bg-transparent xl:pointer-fine:br_pointer-events-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "topLevel__close br_absolute br_inset-0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "topLevel  br_h-screen br_overflow-y-auto br_max-w-[420px] br_h-screen br_pb-36 br_-translate-x-full br_transition-transform br_ease-in-out br_duration-300 group-open/menu:br_translate-x-0 xl:pointer-fine:br_translate-x-0 xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_z-10 xl:pointer-fine:br_h-auto xl:pointer-fine:br_max-w-none xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_top-[9px] xl:pointer-fine:br_pb-0",
                                "data-location": "Menu",
                                "data-roybell": "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "xl:pointer-fine:br_flex xl:pointer-fine:br_pl-[155px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/",
                                                id: "2_phoneCases_all-phone-cases",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "br_group/item",
                                            onClick: handleHover,
                                            id: "yourDivId",
                                            onMouseEnter: ()=>{
                                                document.getElementById("yourDivId").style.cursor = "pointer";
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "br_flex br_items-center br_gap-2",
                                                        children: "Shop"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "subMenu br_bg-white br_max-h-0 br_overflow-hidden br_transition-[max-height] br_duration-300 br_ease-in-out group-open/item:br_max-h-[720px] group-open/item:br_overflow-y-auto xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_w-screen xl:pointer-fine:br_block xl:pointer-fine:br_opacity-0 xl:pointer-fine:br_h-0 xl:pointer-fine:br_max-h-min xl:pointer-fine:br_overflow-hidden xl:pointer-fine:br_transition-all xl:pointer-fine:br_duration-300 xl:pointer-fine:group-submenu-open/menu:br_h-[174px] xl:pointer-fine:group-submenu-open/menu:br_overflow-hidden xl:pointer-fine:group-open/item:br_opacity-100 xl:pointer-fine:group-open/item:br_z-20 xl:pointer-fine:br_pointer-events-none xl:pointer-fine:group-hover/item:br_pointer-events-auto",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "br_px-8 br_py-4 xl:pointer-fine:br_pb-8 xl:pointer-fine:br_pt-12",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                className: "br_hidden br_border-none xl:pointer-fine:br_block xl:pointer-fine:br_bg-grey-200 br_absolute br_w-full br_h-[1px] br_top-[5px] br_left-0 "
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "br_columns-2 br_gap-4 xl:pointer-fine:br_columns-auto xl:pointer-fine:br_flex xl:pointer-fine:br_gap-5 xl:pointer-fine:br_justify-center xl:pointer-fine:br_items-stretch 2xl:pointer-fine:br_justify-start 2xl:pointer-fine:br_ml-[140px]",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Appliances",
                                                                            id: "0_bags_0_backpacks",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Backpacks",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "api/proxy?url=https://ucarecdn.com/765fdb37-952f-493d-9519-24ecbbafda39/app1.webp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Appliances"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Fashion",
                                                                            id: "0_bags_1_crossbody-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Slings & Crossbody Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "api/proxy?url=https://ucarecdn.com/99b65eec-388e-4333-aacb-7127191aea8d/wear1.webp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Fashion"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Household",
                                                                            id: "0_bags_2_tote-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Tote & Shoulder Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "api/proxy?url=https://ucarecdn.com/701a7be5-3fad-44f2-a54d-77d7064d24ae/house1.webpp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Household"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Picnic Items",
                                                                            id: "0_bags_3_market-cooler-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Market & Cooler Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "api/proxy?url=https://ucarecdn.com/fd4a6f3f-d8bc-41a2-b6d3-163a4af8d178/picnic1.webp"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Picnic Items"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/shop",
                                                                            id: "0_bags_4_work-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Work Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "api/proxy?url=https://ucarecdn.com/5a623bba-e4be-4bf2-b638-d9e095e12908/all.webp"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "All Products"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/about",
                                                id: "4_travel_all-travel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    children: "About Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/contact",
                                                id: "about-us_about-us",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n.MiniCart_CartIndicator_Badge1 {\n    box-sizing: content-box!important;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    height: 3px;\n    width: 3px;\n    border-radius: 8px;\n    background-color: #ab695d; \n    color: #fff;\n    border: 2px solid #fff;\n    padding: 2px;\n}\n"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n  #page-header-homepage-1{\n        margin-top: 3em;\n  }\n\n  @media only screen and (max-width: 600px) {\n      #page-header-homepage-1{\n        margin-top: 0;\n  }\n  }\n"
                }
            })
        ]
    });
}
/* harmony default export */ const Navbar2 = (NavBar);

;// CONCATENATED MODULE: ./components/index.ts






/***/ }),

/***/ 32123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendEmail: () => (/* binding */ sendEmail)
/* harmony export */ });
/* harmony import */ var private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66315);
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4275);
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(resend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44475);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19730);
/* __next_internal_action_entry_do_not_use__ sendEmail */ 


const resend = new resend__WEBPACK_IMPORTED_MODULE_1__.Resend(process.env.RESEND_API_KEY);
const sendEmail = async (formData)=>{
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    if (firstname != null) {
        resend.emails.send({
            from: "info@anazon.hadizproductions.com",
            to: "info@anazon-lb.com",
            subject: "New message from your website customer",
            text: "Name: " + firstname + " " + lastname + "\nEmail:" + email + "\nPhone:" + phone + "\n" + message
        });
    } else {
        resend.emails.send({
            from: "info@anazon.hadizproductions.com",
            to: "info@anazon-lb.com",
            subject: "New subscriber from your website",
            text: "Email:" + email
        });
    }
    (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.redirect)("/thank");
};

(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__["default"])([
    sendEmail
]);
(0,private_next_rsc_action_proxy__WEBPACK_IMPORTED_MODULE_0__["default"])("0c269b91fb006feeaed9f05f6e56f6755bac6476", null, sendEmail);


/***/ }),

/***/ 60729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\abc\Desktop\Hadi\My Bussiness\anazon\anazon\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 24521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Load"
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 84986:
/***/ (() => {



/***/ }),

/***/ 56812:
/***/ (() => {



/***/ }),

/***/ 96577:
/***/ (() => {



/***/ }),

/***/ 71338:
/***/ (() => {



/***/ }),

/***/ 38604:
/***/ (() => {



/***/ })

};
;