import React from 'react'

export default function FavPage() {
    return (
        <>
            <section className="fav mt-5">
                <div className="container">
                    <div className="row g-3 justify-content-between">
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex gap-1 align-items-center  gap-3 mb-3">
                                <button type="button" className=" btn_exit p-1" aria-label="Close">x </button>
                               <a href='#'> <img src='./images/SocksLeft.jpeg'  alt="" title="" style={{ width:"90px", height:"90px" , borderRadius:"0"}}   /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>اسم المنتج </h4>
                            <p className='productname'>مجموعة 6 شراب انكل شيفون كود 1039</p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>السعر</h4>
                            <div className="d-flex"><del>220.00 جنيه</del><span>110.00 جنيه</span></div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h4>تاريخ الاضافة</h4>
                            <p>سبتمبر 27, 2024
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
