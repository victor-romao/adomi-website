import React from 'react';
import './ComoFunciona.css';

class ComoFunciona extends React.Component {
    render () {
        return (
            <section className = 'como_funciona'>
                <h2>Por que contratar com a Adomi?</h2>
                <div className = 'proposta_de_valor'>
                    <div className = 'praticidade'>
                        <div className = 'ícone'>
                            <img src = {require('../../mídia/ícones/praticidade.png')} alt = 'Informações em um só lugar'/>
                            <h3>Praticidade</h3>
                        </div>
                        <p>Pesquise, compare, selecione e contrate prestadores para o seu evento em um só lugar.</p>
                    </div>
                    <div className = 'segurança'>
                        <div className = 'ícone'>
                            <img src = {require('../../mídia/ícones/segurança.png')} alt = 'Segurança do seu dinheiro'/>
                            <h3>Segurança</h3>
                        </div>
                        <p>Pagamento através de uma plataforma segura, com repasse ao prestador apenas após a realização do evento.</p>
                    </div>
                    <div className = 'flexibilidade'>
                        <div className = 'ícone'>
                            <img src = {require('../../mídia/ícones/flexibilidade.png')} alt = 'Flexibilidade para alterações'/>
                            <h3>Flexibilidade</h3>
                        </div>
                        <p>Altere ou cancele sua reserva sem pagar nada até 30 dias antes da data do seu evento.</p>
                    </div>                
                </div>
                <div className = 'passo-a-passo'>
                    <h4>Como funciona?</h4>
                    <img src = {require('../../mídia/imagens/como_funciona_a_adomi.png')} alt = 'Passo a passo: 1- informe os dados do evento; 2 - selecione os serviços desejados; 3 - pague e reserve o seu evento; 4 - altere sua reserva quando quiser; e 5 - aproveite o evento sem se preocupar'/>
                </div>

            </section>
        );
    }
}

export default ComoFunciona