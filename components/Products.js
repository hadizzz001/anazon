import { useState, useEffect } from "react";
import Link from 'next/link'
import Cards from '@/components/Cards';
import RCards from '@/components/RCards';
import Stands from '@/components/Stands';
import Stickers from '@/components/Stickers';

function Products() {
    const [showtab, setShowtab] = useState(1);
    const [allTemp, setTemp] = useState()

    const handletab = (e) => {
        setShowtab(e);
    }












    return (


        <div className="sywProductTabs" id="syw-product-tabs">
            <div className="sywProductTabs-title br_text-2xl-serif md:br_text-3xl-serif center" style={{ textAlign: "center" }}>
                <span>Explore our curated collection!</span>
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '.productTabs{margin:35px 0 0 0;padding:0 10px 10px;background:#FFF}.productTabs__tabs{display:flex;flex-direction:row;justify-content:center;background:#fff}.productTabs__tabs__tab{flex:0 1 auto;max-width:320px;width:50%;width:33%;height:230px;position:relative;margin:0 0 -1px 0;transition:margin .3s ease;cursor:pointer}.productTabs__arrow{position:absolute;bottom:60px;right:50%;height:15px;width:15px;border-top:2px solid #ab695d;border-right:2px solid #ab695d;opacity:0;transform:rotate(135deg) translate(-50%);transition:opacity .3s ease}.productTabs__tabContent{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10}.productTabs__tabContent__title{top:100px;left:0;right:0;z-index:13;transition:top .3s ease;color:#999;text-align:center;position:absolute;padding:10px 10px 0;transition:color .3s ease}.productTabs__tabContent__image{position:absolute;background-position:center center;background-repeat:no-repeat;background-size:contain;z-index:11;top:0;left:50%;transform:translateX(-50%);width:105px;height:105px;border-radius:50%;transition:background-image .3s ease}.productTabs__tabContent__image_tab_1{background-image:url("api/proxy?url=https://ucarecdn.com/99b65eec-388e-4333-aacb-7127191aea8d/wear1.webp?auto=format&fit=max")}.productTabs__tabContent__image_tab_2{background-image:url("https://bellroy-cms-images.imgix.net/3838/icon-inactive-note-sleeve.jpg?auto=format&fit=max")}.productTabs__tabContent__image_tab_3{background-image:url("api/proxy?url=https://ucarecdn.com/701a7be5-3fad-44f2-a54d-77d7064d24ae/house1.webpp?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_1{background-image:url("https://bellroy-cms-images.imgix.net/3831/icon-active-card-sleeve.jpg?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_2{background-image:url("api/proxy?url=https://ucarecdn.com/765fdb37-952f-493d-9519-24ecbbafda39/app1.webp?auto=format&fit=max")}.productTabs__tabs__tab:hover.tab-active:hover .productTabs__tabContent__image_tab_2:hover{background-image:url("https://res.cloudinary.com/duppvjinz/image/upload/v1712154091/orud4azbzah8wd0i88gc.webp?auto=format&fit=max")}.productTabs__tabContent__image:hover .productTabs__tabContent__image_tab_1:hover{background-image:url("api/proxy?url=https://ucarecdn.com/99b65eec-388e-4333-aacb-7127191aea8d/wear1.webp?auto=format&fit=max")}.productTabs__tabs__tab.tab-active .productTabs__tabContent__image_tab_3{background-image:url("https://bellroy-cms-images.imgix.net/3833/icon-active-folio.jpg?auto=format&fit=max")}.productTabs__tabContent__title span{font-size:14px;letter-spacing:1px;line-height:20px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-weight:700}.productTabs__tabContent__title p{font-size:12px;line-height:18px;color:#444;font-family:\'PT Serif\', sans-serif;-webkit-font-smoothing:antialiased;letter-spacing:0;font-weight:300}.productTabs__tabs__tab.tab-active .productTabs__arrow{opacity:1}.productTabs__tabs__tab.tab-active .productTabs__tabContent__title, .productTabs__tabContent__title{color:#000}.productTabs__content{display:block;height:0;overflow:hidden}.productTabs__content.tab-active{display:block;height:auto;overflow:auto}@media (max-width: 500px){.productTabs__tabContent__title span{font-size:13px;line-height:1.45px}.productTabs__tabs__tab{height:200px}.productTabs__arrow{bottom:35px}}@media (min-width: 768px){.productTabs__tabs__tab{height:230px}.productTabs__tabContent__image{border-radius:unset;width:180px;height:180px}.productTabs__tabContent__title{padding:35px 10px 0}.sywProductTabs-title{padding:60px 0 20px}}@media (min-width: 769px){.productTabs__tabContent__title{top:180px}.productTabs__tabContent__title span{font-size:14px}.productTabs__tabContent__title p{font-size:14px}.productTabs__arrow{bottom:50px}.productTabs__tabs__tab.tab-active{margin:0 0 -1px 0;opacity:1}}@media (min-width: 1300px){.productTabs__tabs__tab{height:250px}.productTabs__arrow{bottom:50px}.productTabs__tabContent__title{padding:30px 10px 0}}.productStylesGrid--center{grid-template-columns:repeat(auto-fill, minmax(350px, 1fr)) [row-end];justify-content:center;max-width:1280px;margin:0 auto}@media (min-width: 700px){.ProductDetail_ProductTilePanes_PaneInfo_Details{text-align:center}.ProductDetail_ProductTilePanes_PaneInfo_ImageWrapper{min-height:285px}}.ShopAndShare__buttonContainer{display:none}\n'
                }}
            />

            
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n  @media (min-width: 768px){ \n.productTabs__tabContent__image { \n    width: 250px !important;\n    height: 250px !important;\n}\n}\n"
  }}
/>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n@media (min-width: 1300px){ \n.productTabs__tabContent__title {\n    padding: 60px 10px 0;\n}\n}\n"
  }}
/>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n@media (min-width: 769px){ \n.productTabs__tabContent__title span {\n    font-size: 18px;\n}\n}\n"
  }}
/>


<style
  dangerouslySetInnerHTML={{
    __html:
      "\n   \n/* Add this for changing background on hover */\n#tabss1:hover .productTabs__tabContent__image_tab_2 {\n  background-image: url('api/proxy?url=https://ucarecdn.com/b5b65046-8c58-4b28-b686-bf0359f4f632/app.webp');\n}\n\n#tabss2:hover .productTabs__tabContent__image_tab_1 {\n  background-image: url('api/proxy?url=https://ucarecdn.com/6c2f46b3-3189-41ec-81f8-c4fa612bd47a/wear.webp');\n}\n\n#tabss3:hover .productTabs__tabContent__image_tab_3 {\n  background-image: url('api/proxy?url=https://ucarecdn.com/41b1f66c-b2e9-477c-9f1a-b7a91cf87181/house.webp');\n}\n\n#tabss4:hover .productTabs__tabContent__image_tab_4 {\n  background-image: url('api/proxy?url=https://ucarecdn.com/10c6b39d-df3f-498b-916e-731c8901c730/picnic.webp');\n}\n\n  "
  }}
/>

<style
  dangerouslySetInnerHTML={{
    __html:
      "\n   @media screen and (max-width: 600px) {\n  .product-grid--borderless{\n    display: grid !important;\n\n  }\n  .productTabs__tabs__tab{\n    height:130px !important;\n  }\n   }\n"
  }}
/>




            <div className="productTabs">


                <div className="productTabs__tabs">
                    <div id="tabss1" className="productTabs__tabs__tab tab-active" data-tab="tab_2" onClick={() => handletab(1)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_2"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Appliances</span>
                                <br />
                                <div className={showtab === 1 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="35px" height="35px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div id="tabss2" className="productTabs__tabs__tab" data-tab="tab_1" onClick={() => handletab(2)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_1"></div>
                            <div className="productTabs__tabContent__title">
                                <span>
                                    Fashion
                                </span>
                                <br />
                                <div className={showtab === 2 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="35px" height="35px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />

                            </div>
                        </div>
                    </div>
                    <div id="tabss3" className="productTabs__tabs__tab" data-tab="tab_3" onClick={() => handletab(3)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_3"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Household</span>
                                <br />
                                <div className={showtab === 3 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="35px" height="35px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                    <div id="tabss4" className="productTabs__tabs__tab" data-tab="tab_4" onClick={() => handletab(4)}>
                        <div className="productTabs__arrow"></div>
                        <div className="productTabs__tabContent">
                            <div className="productTabs__tabContent__image productTabs__tabContent__image_tab_4"></div>
                            <div className="productTabs__tabContent__title">
                                <span>Picnic Items</span>
                                <br />
                                <div className={showtab === 4 ? "block" : "hidden"}>
                                    <svg style={{ display: "inline" }} width="35px" height="35px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#0005"></path></g></svg>
                                </div>
                                <p />
                            </div>
                        </div>
                    </div>
                </div>













                <div class="tab-content text-dark" id="pills-tabContent">



                    {/* start tab 1*/}
                    <div className={showtab === 1 ? "tab-pane fade show active" : "tab-pane fade show"} >
                        <Cards/>
                    </div>
                    {/* close tab 1*/}


                    {/* start tab 2*/}

                    <div className={showtab === 2 ? "tab-pane fade show active" : "tab-pane fade show"} >
                    <RCards/>
                    </div>
                    {/* close tab 2*/}


                    {/* start tab 3*/}
                    <div className={showtab === 3 ? "tab-pane fade show active" : "tab-pane fade show"} >
                    <Stands/>
                    </div>
                    {/* close tab 3*/}

                    {/* start tab 3*/}
                    <div className={showtab === 4 ? "tab-pane fade show active" : "tab-pane fade show"} >
                    <Stickers/>
                    </div>
                    {/* close tab 3*/}


                </div>
            </div>
        </div>




    );
}
export default Products;