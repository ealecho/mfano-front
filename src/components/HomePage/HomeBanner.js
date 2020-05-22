import React from 'react'
import {Banner, BannerRow, BTPrimary, BTSecondary,  Definition, Headline1} from '../../styles/HomeStyles'
import { Container } from '../../styles/globalStyles'


const HomeBanner = () => {
    return (
        <Banner>
            <BannerRow>
                <Headline1>
                    <BTPrimary>Let us craft the next chapter of your business.</BTPrimary>
                </Headline1>
                <BTSecondary>
                    <Definition>
                    We are a Human Engaged African Business strategy and 
design firm. We explore business, practice and philosophy 
of design in distinct part. We further partner with founders 
of transformative consumer and enterprise companies to 
offer a deep-dive diagnostic in areas of Product and 
Service design, Venture design and impact Design. 
                    </Definition>

                    <button>
                        <span></span>
                        <div>Our approach</div>
                    </button>
                </BTSecondary>
           
            </BannerRow>
        </Banner>
    )
}

export default HomeBanner
