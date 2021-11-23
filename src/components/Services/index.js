import React from 'react'
import {ServicesContainer, ServicesH1,ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import Icon1 from '../../img/svg-1.svg'
import Icon2 from '../../img/svg-2.svg'
import Icon3 from '../../img/svg-3.svg'



const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Nuestros Psicologos</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2> Inserte Titulo Aqui </ServicesH2>
                    <ServicesP>Inserte Subtitulo Aqui</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2> Inserte Titulo Aqui </ServicesH2>
                    <ServicesP>Inserte Subtitulo Aqui</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Inserte Titulo Aqui </ServicesH2>
                    <ServicesP>Inserte Subtitulo Aqui</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2> Inserte Titulo Aqui </ServicesH2>
                    <ServicesP>Inserte Subtitulo Aqui</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
