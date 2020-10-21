import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import { FaChrome, FaSafari, FaSearch } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi'
import './App.css';

const links = [
  {
    name: "REDE COLABORATIVA",
    url: "https://confederacaosicredi.sharepoint.com/sites/rc_731",
    coop: true,
    cola: false,
    chrome: true,
    safari: true,
    vpn: false
  },
  {
    name: "SISTEMA DE CARTÕES - SGC",
    url: "http://sicredicartoes.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false
  },
  {
    name: "TOPAZ",
    url: "http://pld.sicredi.net/",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true
  },
  {
    name: "QUIOSQUE COLABORADOR",
    url: "https://quiosque.sicredi.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "REGISTRO E ACERTO DE PONTO",
    url: "https://gestaoponto.sicredi.com.br/user/register/today-working",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "ADMINISTRADOR DE CANAIS - ADMIN",
    url: "http://admin-ibpj.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "BASE DE CONHECIMENTO",
    url: "https://sicrediprod.service-now.com/0731",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "CRM",
    url: "http://crmoperacional.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "DOCUSIGN",
    url: "https://account.docusign.com/#/password",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "FLUID",
    url: "http://cafelandia.websicredi.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "SISTEMA DE CONSÓRCIOS",
    url: "https://consorcio.sicredi.com.br/",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "SISTEMA DE SEGUROS - SIS",
    url: "http://sis.sicredi.net/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "SISTEMA DE GESTÃO DE IDENTIDADES - IDM",
    url: "https://acessos.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false
  },
  {
    name: "TAREFAS DA REDE COLABORATIVA",
    url: "http://front-corp12c.sicredi.net/sicredi-tarefas-frontend/",
    coop: true,
    cola: false,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "SISITEMA DE CONSULTA - BUREAU",
    url: "https://bureau.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false
  },
  {
    name: "ANALYZER",
    url: "http://pfc.sicredi.com.br",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true
  },
  {
    name: "SISTEMAS HGV",
    url: "http://sistemashgv.sicredi.net",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: true
  },
  {
    name: "GESTÃO DE FILAS",
    url: "",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: false
  },
  {
    name: "GED - NE BANCO DE DOCUMENTOS",
    url: "http://nebancodedocumentos.com.br/ged/login.php",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "PLACECON",
    url: "http://placecon.com.br",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "USD",
    url: "http://usd.sicredi.net",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false
  },
  {
    name: "VISUALIZE",
    url: "",
    coop: false,
    cola: false,
    safari: false,
    chrome: false,
    vpn: false
  },
  {
    name: "AGENTE CREDENCIADO",
    url: "https://bo-agente.sicredi.net/",
    coop: true,
    cola: false,
    safari: false,
    chrome: true,
    vpn: false
  },
  {
    name: "WHATSAPP ENTERPRISE",
    url: "https://plataforma.ubots.com.br/Sicredi",
    coop: true,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  },
  {
    name: "CETIP",
    url: "https://cadu.cetip.com.br/login",
    coop: false,
    cola: true,
    safari: true,
    chrome: true,
    vpn: false
  }
]


const initFilter = {
  coop: false,
  cola: false,
  safari: false,
  chrome: false,
  vpn: false
}




function App() {

  const [filter, setFilter] = useState(initFilter)
  const [searchText, setSearchText] = useState('')
  const [filteredLinks, setFilteredLinks] = useState(links)



  useEffect(() => {
    setFilteredLinks(links)
  }, [])



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

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFilter({ ...filter, [name]: value });
    const auxFilter = { ...filter, [name]: value }
    if (isEquivalent(auxFilter, initFilter)) {
      setFilteredLinks(links)
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
          <input className="input-search" placeholder="Busque um sistema aqui" value={searchText} onChange={(event) => { filterLink(event) }} />
          <FaSearch color="#aab0b5" />
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
                          <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />
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
                          <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />
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
                    <li>
                      <a href={item.url} target="_blank">
                        <div className="item-logo">
                          <img src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png" />
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
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
