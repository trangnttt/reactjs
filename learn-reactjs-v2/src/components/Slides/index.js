import React from 'react'

const Slides = () => {
    return (
        <div>
            <ul className="c-slides">
                <input type="radio" name="radio-btn" id="img-1" defaultChecked />
                <li className="c-slides__item">
                    <div className="c-slides__img">
                        <img src="https://freshdesignweb.com/demo/template/ustora/img/h4-slide4.png" />
                    </div>
                    <div className="c-slides__btn">
                        <label htmlFor="img-6" className="c-slides__btn--prev">&#x2039;</label>
                        <label htmlFor="img-2" className="c-slides__btn--next">&#x203a;</label>
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-2" />
                <li className="c-slides__item">
                    <div className="c-slides__img">
                        <img src="../../assets/images/h4-slide2.png" />
                    </div>
                    <div className="c-slides__btn">
                        <label htmlFor="img-1" className="c-slides__btn--prev">&#x2039;</label>
                        <label htmlFor="img-3" className="c-slides__btn--next">&#x203a;</label>
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-3" />
                <li className="c-slides__item">
                    <div className="c-slides__img">
                        <img src="../../assets/images/h4-slide3.png" />
                    </div>
                    <div className="c-slides__btn">
                        <label htmlFor="img-2" className="c-slides__btn--prev">&#x2039;</label>
                        <label htmlFor="img-4" className="c-slides__btn--next">&#x203a;</label>
                    </div>
                </li>

                <input type="radio" name="radio-btn" id="img-4" />
                <li className="c-slides__item">
                    <div className="c-slides__img">
                        <img src="../../assets/images/h4-slide4.png" />
                    </div>
                    <div className="c-slides__btn">
                        <label htmlFor="img-3" className="c-slides__btn--prev">&#x2039;</label>
                        <label htmlFor="img-5" className="c-slides__btn--next">&#x203a;</label>
                    </div>
                </li>
                
                <li className="c-slides__btn--dots">
                    <label htmlFor="img-1" className="c-slides__btn--dot" id="img-dot-1"></label>
                    <label htmlFor="img-2" className="c-slides__btn--dot" id="img-dot-2"></label>
                    <label htmlFor="img-3" className="c-slides__btn--dot" id="img-dot-3"></label>
                    <label htmlFor="img-4" className="c-slides__btn--dot" id="img-dot-4"></label>
                </li>
            </ul>
        </div>
    )
}

export default Slides