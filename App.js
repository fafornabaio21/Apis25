import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import menuData from './data'; // Importa los datos del menú

function App() {
  useEffect(() => {
    // Add padding to body to account for fixed navbar
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px');

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('.navbar').outerHeight()
        }, 800);
      }
    });

    // Update active nav link on scroll
    $(window).on('scroll', function() {
      var scrollPos = $(window).scrollTop();
      $('.nav-link').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr('href'));
        if (refElement.length) {
          if (refElement.position().top - $('.navbar').outerHeight() <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav-link').removeClass('active');
            currLink.addClass('active');
          }
        }
      });
    });

    // Category filter clicks (basic logging for now)
    $('.category-item').on('click', function() {
      $('.category-item').removeClass('active');
      $(this).addClass('active');
      console.log('Category selected: ' + $(this).data('category'));
      // In a real application, you would filter the menu items here
    });

    // Search input handler (basic logging for now)
    $('#searchInput').on('input', function() {
      console.log('Search term: ' + $(this).val());
      // In a real application, you would filter the menu items here
    });

    // Cleanup event listeners when component unmounts
    return () => {
      $('a[href^="#"]').off('click');
      $(window).off('scroll');
      $('.category-item').off('click');
      $('#searchInput').off('input');
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Hero />
      <MenuSection id="entrantes" title="Entrantes" dishes={menuData.entrantes} />
      <MenuSection id="ensaladas" title="Ensaladas" dishes={menuData.ensaladas} />
      <MenuSection id="carnes-rojas" title="Platos Principales" subcategoryTitle="Carnes Rojas" dishes={menuData["carnes-rojas"]} />
      <MenuSection id="carnes-blancas" title="Platos Principales" subcategoryTitle="Carnes Blancas" dishes={menuData["carnes-blancas"]} />
      <MenuSection id="pescados" title="Platos Principales" subcategoryTitle="Pescados" dishes={menuData.pescados} />
      <MenuSection id="pastas" title="Pastas" dishes={menuData.pastas} />
      <MenuSection id="postres" title="Postres" dishes={menuData.postres} />
      <MenuSection id="bebidas-alcoholicas" title="Bebidas" subcategoryTitle="Bebidas Alcohólicas" dishes={menuData.bebidas["bebidas-alcoholicas"]} />
      <MenuSection id="bebidas-sin-alcohol" title="Bebidas" subcategoryTitle="Bebidas sin Alcohol" dishes={menuData.bebidas["bebidas-sin-alcohol"]} />
      <Footer />
    </div>
  );
}

export default App;