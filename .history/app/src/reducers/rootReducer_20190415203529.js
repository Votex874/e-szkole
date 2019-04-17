const fetchUsers = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await response.json()
  return data
}

const users = fetchUsers()
  .then(res => JSON.stringify(res))
  .catch(err => Error(err));

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
  users: users,
  news: [
    {
      date: '24 03 2018',
      author: '01Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },  
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },  
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },   
    {
      date: '24 03 2018',
      author: '02Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '0324 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '24 03 2018',
      author: 'Jan Wojnicki',
      title: 'Żegnamy marzanne',
      imageName: 'news01',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '01 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    },
    {
      date: '0401 06 2018',
      author: 'Sebastian Karolski',
      title: 'Przygotowania do wakacji',
      imageName: 'news02',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem        metus, convallis non justo ut, pharetra pulvinar justo. Morbi ac tellus           fringilla lorem eleifend convallis non sit amet nulla. Maecenas facilisis magna   at bibendum rutrum. Pellentesque maximus erat sit amet tortor pellentesque        lobortis. Nunc id tortor nibh. Maecenas pellentesque arcu erat, nec imperdiet     est luctus in. Donec congue, enim sit amet elementum tempus, nunc elit vehicula   orci, eu volutpat metus libero eu ligula. Nunc pretium lobortis metus sit amet    luctus. Ut vel felis interdum, facilisis odio in, placerat nunc. Nulla            facilisi. Phasellus bibendum vitae est sit amet vestibulum. Praesent vehicula     nunc malesuada augue gravida gravida. Sed id nisl consectetur, venenatis metus    ut, viverra justo. Sed fringilla ligula non est aliquam, quis ullamcorper mi      malesuada. Vivamus tincidunt luctus quam id porttitor.',
    }      
  ],
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
  ],
  aboutTeam: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Massa sed elementum tempus egestas sed sed.Feugiat pretium nibh ipsum consequat nisl vel pretium.Arcu ac tortor dignissim convallis aenean et tortor at.Aliquam malesuada bibendum arcu vitae.Nullam ac tortor vitae purus.Suspendisse sed nisi lacus sed viverra tellus in.Id semper risus in hendrerit gravida.Iaculis nunc sed augue lacus viverra vitae congue eu consequat.Pulvinar pellentesque habitant morbi tristique Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Massa sed elementum tempus egestas sed sed.Feugiat pretium nibh ipsum consequat nisl vel pretium.Arcu ac tortor dignissim convallis aenean et tortor at.Aliquam malesuada bibendum arcu vitae.Nullam ac tortor vitae purus.Suspendisse sed nisi lacus sed viverra tellus in.Id semper risus in hendrerit gravida.Iaculis nunc sed augue lacus viverra vitae congue eu consequat.Pulvinar pellentesque habitant morbi tristique senectus et netus.Lacinia quis vel eros donec ac odio tempor.Urna duis convallis convallis tellus.Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Massa sed elementum tempus egestas sed sed.Feugiat pretium nibh ipsum consequat nisl vel pretium.Arcu ac tortor dignissim convallis aenean et tortor at.Aliquam malesuada bibendum arcu vitae.Nullam ac tortor vitae purus.Suspendisse sed nisi lacus sed viverra tellus in.Id semper risus in hendrerit gravida.Iaculis nunc sed augue lacus viverra vitae congue eu consequat.Pulvinar pellentesque habitant morbi tristique senectus et netus.Lacinia quis vel eros donec ac odio tempor.Urna duis convallis convallis tellus.Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. senectus et netus.Lacinia quis vel eros donec ac odio tempor.Urna duis convallis convallis tellus.Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.',
  
}

console.log(initState)

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer