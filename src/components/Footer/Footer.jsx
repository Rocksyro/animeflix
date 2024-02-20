import React from 'react'
import './Footer.css'
import { FaYoutube, FaFacebookSquare, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { TbCrown } from "react-icons/tb";
import { FaRegCopyright } from "react-icons/fa";
import sonyLogo from '../../assets/images/sony_pictures_logo.png'


export const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='nav'>
                    <h4>Navegación</h4>
                    <ul>
                        <li>Explorar lo más popular</li>
                        <li>Explorar los Simulcasts</li>
                        <li>Calendario de lanzamientos</li>
                        <li>Noticias</li>
                        <li>Juegos</li>
                    </ul>
                </div>
                <hr />
                <div className='nav'>
                    <h4>Conecta con nosotros</h4>
                    <ul>
                        <li><FaYoutube /> Youtube</li>
                        <li><FaFacebookSquare /> Facebook</li>
                        <li><FaTwitter /> Twitter</li>
                        <li><FaInstagram /> Instagram</li>
                        <li><FaTiktok /> TikTok</li>
                    </ul>
                </div>
                <hr />
                <div className='nav'>
                    <h4>Crunchyroll</h4>
                    <ul>
                        <li className='free'><TbCrown className='crown' size={20} /> Comienza tu Prueba gratuita</li>
                        <li>Acerca</li>
                        <li>Ayuda/FAQ</li>
                        <li>Términos de Uso</li>
                        <li>Política de Privacidad</li>
                        <li>Herramienta de aceptación de cookies</li>
                        <li>Contacto de prensa</li>
                        <li>Hazte con nuestras aplicaciones</li>
                        <li>Canjear Tarjeta Regalo</li>
                        <li>Empleo</li>
                    </ul>
                </div>
                <hr/>
                </div>
                <hr className='final'/>
                <div className='last'>
                    <img src={sonyLogo} alt="" />
                    <div><FaRegCopyright size={12} />Crunchyroll, LLC</div>
                </div>
        </footer>
    )
}
