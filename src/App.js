import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import { FaChrome, FaSafari, FaSearch } from 'react-icons/fa';
import './App.css';

let links = [
  {
    name: "REDE COLABORATIVA",
    url: "googlechromes://confederacaosicredi.sharepoint.com/sites/rc_731",
    coop: true,
    cola: false,
    chrome: true,
    safari: true,
    vpn: false,
    logo: null
  },
  {
    name: "SICREDI CARTÕES - SGC",
    url: "googlechrome://sicredicartoes.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false,
    logo: null,
  },
  {
    name: "PLD",
    url: "http://pld.sicredi.net/",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true,
    logo: null,
    showModal: false
  },
  {
    name: "QUIOSQUE COLABORADOR",
    url: "googlechromes://quiosque.sicredi.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "REGISTRO E ACERTO DE PONTO",
    url: "googlechromes://gestaoponto.sicredi.com.br/",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "ADMIN - ADMINISTRADOR DE CANAIS",
    url: "googlechrome://admin-ibpj.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "BASE DE CONHECIMENTO",
    url: "googlechromes://sicrediprod.service-now.com/0731",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "CRM",
    url: "googlechrome://crmoperacional.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "DOCUSIGN",
    url: "googlechromes://account.docusign.com/#/password",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: "https://www.docusign.com.br/themes/custom/cubic/patternLibraryAssets/images/logos/logo-main.svg"
  },
  {
    name: "FLUID",
    url: "googlechrome://cafelandia.websicredi.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: "http://www.fluidnow.com.br//wp-content/uploads/2015/10/fluid.png"
  },
  {
    name: "CONSÓRCIOS",
    url: "googlechromes://consorcio.sicredi.com.br/",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "SIS",
    url: "googlechrome://sis.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "ACESSO INTELIGENTE",
    url: "googlechromes://acessos.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "TAREFAS DA REDE COLABORATIVA",
    url: "googlechrome://front-corp12c.sicredi.net/sicredi-tarefas-frontend/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "BUREAU",
    url: "googlechromes://bureau.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "ANALYZER",
    url: "http://pfc.sicredi.com.br",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true,
    logo: null,
    showModal: true
  },
  {
    name: "SISTEMAS HGV",
    url: "http://sistemashgv.sicredi.net",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true,
    logo: null,
    showModal: false
  },
  {
    name: "GESTÃO DE FILAS",
    url: "",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: false,
    logo: null
  },
  {
    name: "GED - NE BANCO DE DOCUMENTOS",
    url: "googlechrome://nebancodedocumentos.com.br/ged/login.php",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "PLACECON",
    url: "googlechromes://placecon.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: "https://placecon.com.br/auth/assets/images/logo_dark.png"
  },
  {
    name: "USD",
    url: "googlechrome://usd.sicredi.net",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "VISUALIZE",
    url: "",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: false,
    logo: null
  },
  {
    name: "AGENTE CREDENCIADO",
    url: "googlechromes://bo-agente.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false,
    logo: null
  },
  {
    name: "WHATSAPP ENTERPRISE",
    url: "googlechromes://plataforma.ubots.com.br/Sicredi",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: "https://ubots.com.br/wp-content/uploads/2018/03/logo-branco-367px.png"
  },
  {
    name: "CETIP",
    url: "googlechromes://cadu.cetip.com.br/login",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false,
    logo: "https://i.imgur.com/tJvUHmN.png"
  }
]

/*
const initFilter = {
  coop: false,
  cola: false,
  safari: false,
  chrome: false,
  vpn: false,
logo: null
}

*/


function App() {

  links = links.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  //const [filter, setFilter] = useState(initFilter)
  const [searchText, setSearchText] = useState('')
  const [filteredLinks, setFilteredLinks] = useState(links)



  function filterLink(event) {
    const value = event.target.value
    setSearchText(value)

    if (value.trim() !== '') {
      const auxFiltered = links.filter(item => {
        if (item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
          return true
        return false
      })
      setFilteredLinks(auxFiltered)
    } else {
      setFilteredLinks(links)
    }
  }
  /*
    function handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      setFilter({ ...filter, [name]: value });
      const auxFilter = { ...filter, [name]: value }
      if (isEquivalent(auxFilter, initFilter)) {
        setFilteredLinks(links)``
        return
      }
      const result = links.filter(item => {
        for (let key in auxFilter) {
          if (item.key === false && (item[key] === undefined || item[key] !== auxFilter[key]))
            return false
          if (item.vpn !== auxFilter.vpn)
            return false
        }
        return true
      })
      setFilteredLinks(result)
    }
  */
  /*
    function isEquivalent(a, b) {
      var aProps = Object.getOwnPropertyNames(a);
      var bProps = Object.getOwnPropertyNames(b);
      if (aProps.length != bProps.length) {
        return false;
      }
      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    */


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-type">Sicredi</span>
        <div className="container-end">
          <span className="App-type-mini">Sistemas</span>
        </div>
      </header>
      <body >
        <div className="search-bar">
          <input className="input-search" placeholder="Busque por um sistema aqui" value={searchText} onChange={(event) => { filterLink(event) }} />
          <FaSearch color="#aab0b5" />
        </div>
        <div className="index-container" >
          <div className="index-item-container">
            <FaChrome color="#414452" style={{ marginRight: 2 }} size={40} style={{ marginRight: 20 }} />
            <strong>Disponivel no Google Chrome</strong>
          </div >
          <br />
          <div className="index-item-container">
            <FaSafari color="#414452" size={40} style={{ marginRight: 20 }} />
            <strong>Disponivel no Safari</strong>
          </div>
        </div>
        <div className="container">
          <div className="container-coop">
            <div className="container-title">
              <div className="title">Rede Coop</div>
            </div>
            <ul className="link-container">
              {
                filteredLinks.map(item =>
                  (item.coop &&
                    <li>
                      <a href={item.url} target="_blank">
                        <div className="item-logo" >
                          {
                            item.logo !== null ?
                              <img src={item.logo} />
                              :
                              <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />

                          }
                          <div className="container-icons">
                            {item.chrome && <FaChrome color="#414452" style={{ marginRight: 2 }} size={16} />}
                            {item.safari && <FaSafari color="#414452" size={16} />}
                            {item.vpn && <span style={{ color: "#414452", fontWeight: "bold" }}>VPN</span>}
                          </div>
                        </div>
                        <div className="item-text">{item.name}</div>
                      </a>
                    </li>
                  )
                )
              }
            </ul>
            <div className="container-title">
              <div className="title">Rede Colaboradores</div>
            </div>
            <ul className="link-container">
              {

                filteredLinks.map(item =>
                  (item.cola &&
                    <li>
                      <a href={item.url} target="_blank">
                        <div className="item-logo">
                          {
                            item.logo !== null ?
                              <img src={item.logo} />
                              :
                              <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />

                          }
                          <div className="container-icons">
                            {item.chrome && <FaChrome color="#414452" style={{ marginRight: 2 }} size={16} />}
                            {item.safari && <FaSafari color="#414452" size={16} />}
                            {item.vpn && <span style={{ color: "#414452", fontWeight: "bold" }}>VPN</span>}
                          </div>
                        </div>
                        <div className="item-text">{item.name}</div>
                      </a>
                    </li>
                  )
                )
              }
            </ul>
            <div className="container-title">
              <div className="title">Somente por VPN</div>
            </div>
            <ul className="link-container">
              {
                filteredLinks.map(item =>
                  (item.vpn &&
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <li key={item.url} >
                        <div className="item-logo">
                          {
                            item.logo !== null ?
                              <img src={item.logo} />
                              :
                              <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />

                          }
                          <div className="container-icons">
                            {item.chrome && <FaChrome color="#414452" style={{ marginRight: 2 }} size={16} />}
                            {item.safari && <FaSafari color="#414452" size={16} />}
                            {item.vpn && <span style={{ color: "#414452", fontWeight: "bold" }}>VPN</span>}
                          </div>

                          <div >

                          </div>
                        </div>
                        <div className="item-text">{item.name}</div>
                      </li>

                      <div className="modal-container">
                        <strong style={{ color: "#fff" }}>Este link é acessível somente pela VPN</strong>
                        <br />
                        <br />
                        <span>{item.url}</span>
                      </div>
                    </div>
                  )
                )
              }
            </ul>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
