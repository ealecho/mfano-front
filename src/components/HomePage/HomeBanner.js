import React from 'react'
import {Banner, BannerTitle, BTPrimary, BTSecondary,  Headline, Headline1} from '../../styles/homeStyles'
import { Flex } from '../../styles/globalStyles'

const HomeBanner = () => {
    return (
        <Banner>
            <BannerTitle>
                <Headline1>
                <BTPrimary>
                    Let us craft the next
                </BTPrimary>
                <BTPrimary>
                    chapter of your
                </BTPrimary>
                <BTPrimary>
                    business.
                </BTPrimary>
                </Headline1>
                <BTSecondary>
                    <Headline>
                    We are a Human Engaged African Business strategy and 
design firm. We explore business, practice and philosophy 
of design in distinct part. We further partner with founders 
of transformative consumer and enterprise companies to 
offer a deep-dive diagnostic in areas of Product and 
Service design, Venture design and impact Design. 
                    </Headline>

                    <button>
                        <span></span>
                        <div>Our approach</div>
                    </button>
                </BTSecondary>
            </BannerTitle>
        </Banner>
    )
}

export default HomeBanner
