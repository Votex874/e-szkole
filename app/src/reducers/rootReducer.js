const initState = {
  links: {
    home: {
      name: 'strona główna',
      url: '/',
      basic: 'true'
    },
    news: {
      name: 'aktualności',
      url: '/blog',
      basic: 'true'
    },
    about: {
      name: 'o nas',
      url: '/o-nas',
      basic: 'true'
    },
    contact: {
      name: 'kontakt',
      url: '/kontakt',
      basic: 'false'
    },
    panel: {
      name: 'panel',
      url: '/panel',
      basic: 'false'
    },
    recruitment: {
      name: 'rekrutacja',
      url: '/rekrutacja',
      basic: 'true'
    }
  },
  news: {
    1: {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    2: {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    }    
  },
  list: [
    'Cieszy się dobrym zdrowiem',
    'Zawsze mówi prawdę',
    'Lubi pracę twórczą',
    'Radzi sobie z czynnościami samoobsługowymi',
    'Jest zawsze aktywny',
    'Jest radosny i uśmiechnięty',
    'Jest otwarty na otaczający go świat',
    'To dobry kolega',
    'Niesie pomoc potrzebującym',
    'Rozróźnia dobro od zła',
    'Posiada odpowiednie umiejętności i sprawności do podjęcia nauki w szkole',
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer