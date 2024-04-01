import dashboardImg from '../components/images/dashboard.jpg'
import vanImg from '../components/images/vanlife.jpg'
import chatImg from '../components/images/chatImg.jpg'
import netflixImg from '../components/images/netflixImg.jpg'
import ticket2 from '../components/images/ticket2.jpg'
//import ticket1 from '../components/images/ticket1.jpg'
import eventImg from '../components/images/eventImg.jpg'
import eshopMernImg from '../components/images/eshop_mernImg.jpg'
import tinyImg from '../components/images/tinythoughtsImg.jpg'
import gitImg from '../components/images/gitImg.jpg'
import comfyImg from '../components/images/comfyImg.jpg'
import jobImg from '../components/images/jobImg.jpg'
import meetupImg from '../components/images/meetupImg.jpg'
import bookNStayImg from '../components/images/bookNStayImg.jpg'
import pizzaHouseImg from '../components/images/pizza_house.jpg'
import nextJSBlogImg from '../components/images/NextJSBlogApp.jpg'
import LyricalImg from '../components/images/LyricalImg.jpg'
import GraphqlChatImg from '../components/images/graphqlChatImg.jpg'
import JobBoardImg from '../components/images/JobBoardImage.jpg'
import ResumePDF from '../components/Doc/AmiCV.pdf'

export const Bio = {
  name: 'Ami Mehta',
  roles: [
    'React Developer',
    'Front-End Developer',
    'MERN Stack Developer',
    'Full Stack Developer',
    'UI/UX Designer',
  ],
  description:
    'I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.',
  github: 'https://github.com/amehta7',
  resume: ResumePDF || '',
  linkedin: 'https://www.linkedin.com/in/ami-m-4b305a130/',
}

export const skills = [
  {
    title: 'Frontend Technologies',
    skills: [
      {
        name: 'React Js',
        image:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      },
      {
        name: 'Redux',
        image:
          'https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg',
      },
      {
        name: 'React Router',
        image: 'https://www.svgrepo.com/show/354262/react-router.svg',
      },
      {
        name: 'Material UI',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'HTML',
        image: 'https://www.w3.org/html/logo/badge/html5-badge-h-solo.png',
      },
      {
        name: 'CSS',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png',
      },
      {
        name: 'Tailwind CSS',
        image:
          'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png',
      },

      {
        name: 'JavaScript',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      },
      {
        name: 'Styled Components',
        image: 'https://avatars.githubusercontent.com/u/20658825?s=200&v=4',
      },
      {
        name: 'Bootstrap',
        image:
          'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png',
      },

      {
        name: 'Next Js',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=',
      },
      {
        name: 'TypeScript',
        image:
          'data:image/png;base64,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',
      },
    ],
  },
  {
    title: 'Backend Technologies',
    skills: [
      {
        name: 'Node Js',
        image: 'https://nodejs.org/static/images/logo.svg',
      },
      {
        name: 'Express Js',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'RESTful API',
        image:
          'https://icon2.cleanpng.com/20180420/oaw/kisspng-computer-icons-application-programming-interface-r-5ad9d0cf31b7c7.5676330415242242072037.jpg',
      },
      {
        name: 'GraphQL',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png',
      },

      {
        name: 'MySQL',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      },

      {
        name: 'MongoDB',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',
      },
      {
        name: 'Firebase',
        image: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
      },
      {
        name: 'JWT',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'Auth0',
        image: 'https://static.requarks.io/logo/auth0.svg',
      },
      {
        name: 'Postman',
        image:
          'data:image/png;base64,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',
      },
    ],
  },

  {
    title: 'Other Tools and Technologies',
    skills: [
      {
        name: 'Git',
        image: 'https://avatars.githubusercontent.com/u/18133?s=280&v=4',
      },
      {
        name: 'GitHub',
        image:
          'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      {
        name: 'Docker',
        image:
          'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      },
      {
        name: 'Netlify',
        image:
          'https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png',
      },
      {
        name: 'Heroku',
        image:
          'data:image/png;base64,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',
      },
      {
        name: 'AWS',
        image:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA81BMVEUmLjv////4mRsiKzglLTv/nhj8mxr5+fg8QU0hLDsiKjgZIzImLzscJjT/nxggLDsRHiwADyQAJDwLGSsADiMWIDAOGyyeoaMAFCcAAB4XKTwAIjz5mBvLzM7R09Ty8/Po6elZX2d6VTIAID1ydnytrrExN0WNkJa8vb9hZm1RVl19gIZDSVSytbjj4+SBg4pYRDTEfSZGPTjvlSG4dSjOgyRzeIFYW2ejp6toa3Q1P0cADB4IEy0NGCwAGic/SE8AAA8AAAAzMzxpTTOkbC2FXTE7OTuRYi7fiyGocSeYaSliSzRAPTnijCKNYTB/WTIFKTsv9DfvAAAMKUlEQVR4nO2ba1ejyBaGESrEcAkJBELIXWMSo+ZqurUdz8x4S6Kj9v//NacKqqAgUXvmCK45az8fek0wQG1qX969yQgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfjKLbjuW6rmWrupTa5cnVlc+/+odo6rVz2hscDZvN5rA6OUZXKvdXyS6VSo4jacmzbAf/wda3LqeSE0o64o64/cvBEbn6xeS4Xy5laqSGdNc5GXbyexHt5reKyhYo7Vd9Rnb8REUb+Me/23HTNevEP94LTVdrkxZ3+fz44ntNFbJC053j4d42nZ5Fv+GwPx/HdgupbXr8Mr5a64gasu/vlKaUJu2ty497DhKywe6Od9hHOKvQb1TpgeY1f6J6wr7YLPPHpT61p4N8G3ShufPyF042Biqn+Z33Jwxd/yv6Mf3c5iNLsM7Y99qxPQy/3vSdQPnReePyTgr5bAd6700D9/aqwWO22RpHfIKwor2PHXcu6NETYrhiv2XgXj+bdKN/i245bjWbrZjPBpF0zQJxwOUaaT/a/Am/ieUWPeqf63Ix3hoeXeB0zUzOysJgD9vDwX6tgquhW7nqDsO1D/0IU9k+8wGnX0ZLH15H7ouu2ZcrJI0xl91rHddcy3FwTaw4l0MSqlo2qca3cNhTrmyJ3hDpVyP2mPOIxIr2G/toRSeGzkg2X0XxC/obTjbWYlnmohwFsaS7yqTVzCqZaheDvqXyQa8J6j5bux9LgsvW2Y0cK3TGhMM5R9wxSaDu0KrF7yqppVJW1UKy1ULyXuiaFYgzv0CoE/qxGgViOdjVoDJ8447TQG6RLKWP6ImThFrw75KGOb+Kcsr87zf/4+8smFz2Del7cCDY3bOwtiksAfkPI8xjo6/Qou/i0J3o+CtD/6Ef233mzqVgl6uD4EFU2ImhDvBtCj91t8XrF8Mirx1EmFNNrvQq+MIxzZUas5zpgI6/22HCrV7vustXEmlLf+kKi6cwEKkode3AKZnK1my62xd+ppSYe7d/ZKe0fw1WC6iFQpnWj6Yb9BFKN/DOcqVFDQrOk1gWHvkmI53Vnc6onI1Iex8U5jfmlszCayZCadan2fXIoY+CpSCdZt12pUAeBQprB85G/bL6ZUYiUqAc18Vtq+s6ti6hUsLCUJsEgYiokOvp9A80XkORxpKrwmm7veZk37W/JKlqklrZnxw1x4TWWbX3u/tHwkJJYkXAXzoKwi1/Kkkab7lQoZ3TJctIzmCPI98a/KjYSnJYkDqqPeEFCtmSZituYSi/WmWyPBpuY0fQSsE3A1HO6mhboKdpqJzsDluD/euM047be7PBiSxkla3t1wX66cwKVVrTD0Sb7lgzVAZ4u7cb4FbPztBGqXa2tYIdFoYB5Y8ynOAcosWobGn7KYiVUb6dUuKOGjA+Lu9YSzqUds8YkhYKV9Rv/bpQCareqRL1iX4rqQTekDe4pIkEp3+2PUg4KmVkoBWl8712qzkc4h6YmxtFFrJpTcsiU7bg+75Wo1KbBCITBq3EBknl/UEi0nHLVslEekcd6t6wW3Asy3Kv7UK/OxgnLWS1PC8orAcc+lKMeiz5wMJwsNVJKLbTH7TiO1m1kt9KA9br7LWPK3owG0NIkvRaolrgrFij+QgHIi3zgSF6kHU611EY9gs7bqXYZe2kyfvHaQZlI9rCbklAnNckVZsQtbY4EN3A5UgYCkhCdL2SUAs2aWy9sXJJdbWTaBB0lsE8MZwIniUiZ4eFejc4NK7QiWhbDwypBJt7orJ+t7qj3WVIau2EOWs7jfcjCVgbuNW/MdM5CyVEPUyhtjZ/CzbdCpTamcWS0fvtLrK6zMTT1CWcJNBFt5OTvXJS0wiR5uy5VS4Mw/I/LtGTOu77SRJdMc/ppd4XK/vhAD7uL6jQYRZGpjNZc/QH7X7p+phU0+jzuvio2w2jf5K6sgmFSkeIWxhlIM6RaErZG//pn9UOnwoda3fpSaOPdiacAp2kbmH4EoXfKoFUhjDh8TFFu918kFCiqRR132rgvO3E4HCbcMLcTb+VClvwb/zTROVo2sv/gRV0apCTON6kczeukGt6Sd+eGlbYpP8mfQvDUS8/sdUtbpw9jLqEaEQRC8NQrOUDl7/knFS/PPpeshMx7rBc2spgKGyHsv+iHCxMUcujmIQsceuz+dc25Wh5LqdU2nxIE4XemvQrTlj5UKnSY8ViYqdvodIPV9Yc1cpuuaZNmgn1yGXGEre5vLp2uf4k9ro0EAP5VvVYx1d38fULUbPdyaRH5FuLfItrK8JegC+VTNYQjjjJVeI6wFh+rESbnh+38PX5p/dhzv0UQqGS4KIW1gu+aJWib/PhJo2iM2N1p/LWG3TyDLMZEmv6aNdb7oGrscFM+5RbcvS+kxc7+Cqh5fHWkH8Ft2VgVvMoe7S1i+OuJWhU77T2ea+LXouOYwsMXxMmWkPJfmNE0jm+zuzVE9L78R+btAe674Al4qeD+M8JUPjWsBf/dUKXGR4f+mqCdbpjgpGvokynbYq7f0RTTL4z7NVYDldPB/1krCD39BjTlRIr1O0uOT6ytvohyamNLlrt0Exyi7Kd8fBbk67LP7qXvV5337FUIXQ/aVe9knTC9h/wwbd+saY7FfX08mSAObk8dVw184kwQVHwEhUpteCQdFW17S/62R4AAMD/IZqACgXPMKSMfveVIbgOIsMz63VtPp1O55pZN71d4/F/LUjw6je3d8tFsZgLeJ7dP3hp1X/DK2QrLTTB8w5mi5wsi4yGKOfElZfO/Yzp3dzM1EM8b4XNE5PIopFONJrrnLy5MbNrYbzb59yWeb6J81QetOY9FkV58WJ6Gdno3WP3xORCZOapcyOdW9ZXckMsLl4NT8giHr3zxWI526zub6fzh4eH+dP9+SKwsfFXWsFiHuAYaBSf700vi27N0zxcGzxcBgsEXDQe1r6JjdSqolafkqcoy8/3RhZVacsO78UPzIWZ2i0172YtN0jGXqxuzK0fCqd00/AfwTggFsrLeoq3K3jnQX7LLTYPdQ9lYSQimsYvgd5rroFvfZdSPaS3q7+KQTDIueVtIX1nxXL0aZZrHBCrvBW5dfEpVQuxp87XtExhZ72bH3qpeaumFXB2WZGqKC+Iu5gz/+EKaT9Ww9wwHYXL1fL1xiMlMoUCYtTRwUz07yUviI4xnsl/zn6mHRtIMJ8itYF14uzgxvzkGomQYRq350S0NcRGQxaJZxpzYmzuNV0nDfC0DScYsbfO7g3T+zS5iJ3TPMD1nd1CXvr9RFAsFjeZ5HBkTnHd4KRiLrd8nGr/S/NGqwLOnN78fiZHT1AWV4fkspq5JNX4PL1qGAcLfzGm+xtyEW/l3KzjvfwnT1kTsGyp128ONmuZ65fE4nIe2GR4vpM+ZNbfIO/hXE70NvjJL2arqeb99Iy/tRDcyHum8dfr+bOYi100t3it07jDUrxBthBl16UWDqfLpI0kv+bE9fnL04NXJ5rygyyLJGxbva5NDza4k8/xnk/aXfHO8JgKJU6K+4pMW1StUH9aF7d7VCIHcuJivXk8mBuHpkn0M7GWaWgMOYD/UDdvpvd3s+eFWNzxrHLnD1E/WpiTQ3dZRSGFzFGeduwj201saLGxXs7OH18Obp+m03nAdPp0+/pydz5bLuRiLueHXWPrbBHbx22Y9yiL8jpjA4mNOPfdznbMGvgNjdpY2tMWww9vnCLmxM28zs+F0M9n/OW0et8PMMz5Rnxrsf8E0rtoZtwY4ykn5g6yKPY70JBR11brT7KRiKTb7cJqznK5e/ML/ydL5HnTc/Fdb/01+4rr1V/1HbMgc5F7zT4I4xg/D2+J1PrHVpIy80ialZ1Xn998kYtyaJpnotvNM04hW5nxV8xbruZvyz6U0UjhQ7A4MeYvs8XbeXKXcUVxvXkSsHZ/79Jf8i5/J4i0BtOX8/WClrp3bJPlovi8fLzVDs2/J/O+Hglrlpvp62a2JjU9qIM+ohzOeYuLJVZ388/suzLGl9PmIdacq7sNFjDr9TOBaJy71evTA3lVhhX6v9Q6DlQwqAatHx4emvW6GQx6/2VeCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAJ/FfWNsYmF0OQJUAAAAASUVORK5CYII=',
      },
      {
        name: 'VS Code',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519',
      },
    ],
  },
]

export const experiences = [
  {
    id: 0,
    role: 'Assistant Manager',
    company: 'Axis Bank',
    date: 'Nov 2016 - May 2021',
    desc: 'Embarked on a dynamic journey at Axis Bank, starting as an Executive in Personal Loan Processing, where meticulous document verification and credit history assessment ensured compliant and efficient loan processing. Elevated to the role of Customer Relationship Executive, handling inquiries and resolving escalated issues within 24 hours, resulting in a notable 3-4% company growth and implementing retention strategies leading to a 5% improvement in customer retention ratio. Progressed to Assistant Manager in Gold Loan Operations, leading a team in gold loan processing. Leveraged expertise in collateral assessment and operational management to enhance efficiency and customer satisfaction.',
    skills: [
      'Leadership',
      'Gold Loan Operations',
      'Personal Loan Processing',
      'Customer Relationship',
    ],
  },
  {
    id: 1,
    role: 'Software Developer',
    company: 'Theorist World',
    date: 'May 2015 - Oct 2016',
    desc: 'Developed and maintained responsive and visually appealing web applications using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and accessibility. Collaborated closely with project managers, designers, and clients to translate design mockups and wireframes into interactive and functional web interfaces.Conducted thorough testing and debugging of web applications, identifying and resolving issues related to functionality, performance, and user experience.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
]

export const certificates = [
  {
    id: 0,
    role: 'React Certificate',
    company: 'HackerRank',
    date: 'Nov 2022',
    doc: 'https://www.hackerrank.com/certificates/de53c99b18dc?trk=public_profile_see-credential',
  },
  {
    id: 1,
    role: 'Front End Development Libraries',
    company: 'freeCodeCamp',
    date: 'Aug 2022',
    doc: 'https://www.freecodecamp.org/certification/fccefc6d8cd-561c-42b6-8201-5d271d04896b/front-end-development-libraries?trk=public_profile_see-credential',
  },
  {
    id: 2,
    role: 'JavaScript Algorithms and Data Structures',
    company: 'freeCodeCamp',
    date: 'June 2022',
    doc: 'https://www.freecodecamp.org/certification/fccefc6d8cd-561c-42b6-8201-5d271d04896b/javascript-algorithms-and-data-structures?trk=public_profile_see-credential',
  },
  {
    id: 3,
    role: 'Responsive Web Design',
    company: 'freeCodeCamp',
    date: 'May 2022',
    doc: 'https://www.freecodecamp.org/certification/fccefc6d8cd-561c-42b6-8201-5d271d04896b/responsive-web-design?trk=public_profile_see-credential',
  },
]

export const education = [
  {
    id: 0,
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRa9VeJaXU8aaJPTe_OL7yQQx8qh4fMZetX8hTAG-ufH-2m1C3X',
    school: 'Purdue University, Indiana',
    date: 'March 2022 - Jan 2023',
    desc: 'I completed Full Stack Development Certificate Program in which I have learnt MERN(MongoDB, Express.js, React.js, Node.js) tech stack. I have worked on different projects through this course and built different Full Stack Applications.',
    degree: 'Full Stack Development Certificate Program',
  },
  {
    id: 1,
    img: 'http://www.gecgh.cteguj.in/uploads/5882/GECG_logo.png',
    school: 'Government Engineering College, Gandhinagar',
    date: 'July 2011 - May 2015',
    grade: '7.77 CGPA',
    desc: "I have completed my Bachelor's degree in Computer Engineering from Gujarat Technological University. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: 'Bachelor of Engineering in Computer Engineering',
  },
]

export const projects = [
  {
    id: 17,
    title: 'Pizza House',
    description:
      'Developed Pizza House, an online pizza ordering platform, utilizing React,Redux Toolkit, Next.js, MongoDB, Axios, Cloudinary, and used Paypal for payment gateway. Designed an admin dashboard for order management, integrated Cloudinary for media, and Paypal for secure payments.',
    image: pizzaHouseImg,
    tags: [
      'React Js',
      'Next.js',
      'MongoDb',
      'Axios',
      'Cloudinary',
      'React-Paypal-JS',
    ],
    category: 'nextjs app',
    github: 'https://github.com/amehta7/Pizza-House',
  },
  {
    id: 16,
    title: 'BookNStay',
    description:
      '"BookNStay" is a comprehensive MERN (MongoDB, Express.js, React, Node.js) stack travel application designed to provide users with a seamless and feature-rich platform for planning, booking, and managing their travel experiences. Inspired by the user-friendly functionalities of industry leaders like Booking.com, this application offers a dynamic client-side app coupled with a robust backend and an intuitive admin dashboard for efficient management.',
    image: bookNStayImg,
    tags: [
      'React Js',
      'MongoDb',
      'Node Js',
      'Express Js',
      'Material UI',
      'Axios',
      'SASS',
      'Recharts',
      'Cloudinary',
    ],
    category: 'mern app',
    github: 'https://github.com/amehta7/BookNStay',
  },
  {
    id: 14,
    title: 'Jobster',
    description:
      'It is a user-friendly job management application designed to simplify the task of organizing and tracking job-related activities. With seamless features for adding, updating, and deleting jobs, as well as robust filtering options based on job types, status, location, company, position and more, Jobster offers an efficient and intuitive solution for individuals to manage their professional engagements.',
    image: jobImg,
    tags: [
      'React Js',
      'Redux',
      'Axios',
      'Styled-Components',
      'Recharts',
      'Moment',
      'React-icons',
      'React-Toastify',
    ],
    category: 'react app',
    github: 'https://github.com/amehta7/Jobster_App',
    webapp: 'https://starlit-capybara-45c670.netlify.app/',
  },
  {
    id: 0,
    title: 'Admin Dashboard',
    description:
      'Building a sophisticated and feature-rich admin dashboard using React components, managing state and data flow, integrating external libraries for UI components and charts, handling form input and validation, and incorporating calendar functionality.  The dashboard will serve as a central hub for managing data, visualizing key metrics, and facilitating user interactions in a sleek and responsive interface. The application will support both Light and Dark Modes for user customization.',
    image: dashboardImg,
    tags: [
      'React Js',
      'Material UI',
      'Nivo Charts',
      'Formik',
      'Yup',
      'FullCalendar',
    ],
    category: 'react app',
    github: 'https://github.com/amehta7/Admin_Dashboard',
    webapp: 'https://admin-dashboard-react-mui.netlify.app/',
  },

  {
    id: 6,
    title: 'SocialChat',
    description:
      'SocialChat is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that provides users with a platform to connect with friends, follow or unfollow other users, share posts, and engage in social interactions similar to Facebook.',
    image: chatImg,
    tags: [
      'React Js',
      'MongoDb',
      'Node Js',
      'Express Js',
      'Material UI',
      'Axios',
    ],
    category: 'mern app',
    github: 'https://github.com/amehta7/SocialChat',
  },
  {
    id: 18,
    title: 'Blog App',
    description:
      'The Blog App is a dynamic web application designed to manage and display blog posts. Developed using React.js and Next.js for the frontend and MongoDB for the backend, this project combines cutting-edge technologies to create a seamless and efficient blogging experience.',
    image: nextJSBlogImg,
    tags: ['React Js', 'Next.js', 'MongoDb'],
    category: 'nextjs app',
    github: 'https://github.com/amehta7/Blog-App',
    webapp: 'https://next-js-blog-qi7casiez-a-b-patels-projects.vercel.app/',
  },
  {
    id: 19,
    title: 'Lyrical App',
    description:
      'The Lyrical App is a music management application designed to give users the ability to explore a collection of songs, add new songs, attach lyrics to each song, and express their appreciation by liking lyrics. Developed with a tech stack comprising React, GraphQL, Node.js, Express.js, and MongoDB, this project combines powerful frontend and backend technologies for a seamless and engaging user experience.',
    image: LyricalImg,
    tags: [
      'React Js',
      'Node Js',
      'Express Js',
      'GraphQL',
      'MongoDb',
      'Axios',
      'Apollo-Client',
      'Express-Graphql',
    ],
    category: 'graphql app',
    github: 'https://github.com/amehta7/Lyrical-App',
  },
  {
    id: 7,
    title: 'Netflix-clone-App',
    description:
      'The Netflix Clone App is a web application designed to mimic the user interface and functionality of the popular streaming platform Netflix. Leveraging the power of React.js, MongoDB, Node.js, Express.js, Firebase, Styled-components, and Axios, this project provides users with a visually appealing and feature-rich platform for browsing and streaming video content.',
    image: netflixImg,
    tags: [
      'React Js',
      'MongoDb',
      'Node Js',
      'Express Js',
      'Firebase',
      'Styled-components',
      'Axios',
    ],
    category: 'mern app',
    github: 'https://github.com/amehta7/Netflix-clone-App',
  },
  {
    id: 8,
    title: 'TicketTracker',
    description:
      'TicketTracker is a comprehensive MERN stack application designed to efficiently manage ticket services. Leveraging React.js for dynamic user interfaces, MongoDB for data storage, Node.js and Express.js for the backend, Redux for state management, Axios for HTTP requests, and React-Toastify for user notifications, this project delivers a streamlined solution for handling ticket-related services.',
    image: ticket2,
    tags: [
      'React Js',
      'MongoDb',
      'Node Js',
      'Express Js',
      'Redux',
      'Axios',
      'React-Toastify',
    ],
    category: 'mern app',
    github: 'https://github.com/amehta7/TicketTracker',
  },
  {
    id: 10,
    title: 'Eshop',
    description:
      'Developed a feature-rich e-commerce platform, Eshop, using the MERN stack with Admin functionality to provide a seamless online shopping experience. Leveraging React.js for the frontend, MongoDB for data storage, Node.js and Express.js for the backend, and incorporating technologies such as JWT, Redux, Material UI, Fetch API, and React-Toastify, this project delivers a feature-rich e-commerce platform.',
    image: eshopMernImg,
    tags: [
      'React Js',
      'MongoDb',
      'Node Js',
      'Express Js',
      'JWT',
      'Redux',
      'Material UI',
      'FetchAPI',
      'React-Toastify',
    ],
    category: 'mern app',
    github: 'https://github.com/amehta7/Eshop',
  },
  {
    id: 11,
    title: 'ComfySloth',
    description:
      'Designed and developed ComfySloth, an e-commerce platform using React.js. Leveraged Axios for seamless data fetching, Styled-Components for a modern and visually appealing UI, Auth0 for secure user authentication, Stripe for payment processing, and React-icons for enhanced visual elements to provide a seamless online shopping experience.',
    image: comfyImg,
    tags: [
      'React Js',
      'Axios',
      'Styled-Components',
      'Auth0',
      'stripe',
      'React-icons',
    ],
    category: 'react app',
    github: 'https://github.com/amehta7/ComfySloth',
    webapp: 'https://comfyslothapp.netlify.app/',
  },
  {
    id: 1,
    title: 'TinyThoughts',
    description:
      'A dynamic micro-blog application that seamlessly integrated React, React Router, and Redux. The project involved building a user-friendly interface to allow users to create, browse, and manage posts across different categories. Core features included user authentication, post sorting by category and author, post creation, and deletion.',
    image: tinyImg,
    tags: [
      'React Js',
      'Redux',
      'React Router',
      'Fetch API',
      'MongoDb',
      'Node Js',
      'Express Js',
      'JWT',
    ],
    category: 'react app',
    github: 'https://github.com/amehta7/TinyThoughts',
    webapp: 'https://tinythoughts-react.netlify.app/',
  },

  {
    id: 13,
    title: 'VanLife',
    description:
      'Travel Van Rental App - Rent the perfect van to make your perfect road trip. VanLife is a basic React application built to demonstrate the use of React Router v6 developed using React.js and Vite. The project incorporates the latest version of React Router (v6) for seamless navigation, Mirage.js for mock API development, and Vite for a swift development environment.',
    image: vanImg,
    tags: ['React Js', 'React Router', 'Mirage.JS', 'Vite'],
    category: 'react app',
    github: 'https://github.com/amehta7/VanLife',
    webapp: 'https://vanlifereactrouter.netlify.app/',
  },
  {
    id: 12,
    title: 'GitHub Explorer',
    description:
      'GitHub Explorer is a dynamic web application developed with React.js, Axios, Styled-Components, Auth0, FusionCharts, and React-icons. This project allows users to effortlessly search for any GitHub user and view comprehensive information about their repositories, followers, and more.',
    image: gitImg,
    tags: [
      'React Js',
      'Axios',
      'Styled-Components',
      'Auth0',
      'Fusioncharts',
      'React-icons',
    ],
    category: 'react app',
    github: 'https://github.com/amehta7/GitHub-Explorer',
    webapp: 'https://searchgithubusers-react.netlify.app/',
  },
  {
    id: 20,
    title: 'Job Board',
    description:
      'Built application in which user can view the all jobs, add, update and delete the job with React, GraphQL, Node.js, Express.js, MySQL. It uses Apollo Server with Express, and GraphQL-Request and Apollo Client as GraphQL clients. The application is used to explain queries, mutations, custom object types, authentication, etc.',
    image: JobBoardImg,
    tags: [
      'React Js',
      'Node Js',
      'Express Js',
      'GraphQL',
      'MySQL',
      'Apollo-Server',
      'Graphql-Request',
      'Apollo-Client',
      'Express-Graphql',
    ],
    category: 'graphql app',
    github: 'https://github.com/amehta7/JobBoard',
  },
  {
    id: 21,
    title: 'GraphQL Chat',
    description:
      'The GraphQL Chat Application is a web platform that enables users to engage in real-time conversations with friends. This project, crafted with React.js, Node.js, Express.js, GraphQL, and MySQL, showcases a rich set of features to demonstrate fundamental GraphQL concepts. Employing Apollo Server with Express, GraphQL-Request, Apollo Client, and GraphQL-WS for subscriptions, this application serves as an instructive resource, guiding users through queries, mutations, custom object types, authentication, and the implementation of real-time updates.',
    image: GraphqlChatImg,
    tags: [
      'React Js',
      'Node Js',
      'Express Js',
      'GraphQL',
      'MySQL',
      'Apollo-Server',
      'Graphql-Subscriptions',
      'Apollo-Client',
      'Express-Graphql',
    ],
    category: 'graphql app',
    github: 'https://github.com/amehta7/GraphQL-Chat',
  },
  {
    id: 9,
    title: 'Events_App',
    description:
      'The Events Management Application is a robust MERN stack project designed to streamline and manage event services. The project incorporates React.js for the frontend, the latest version of React Router (v6) for seamless navigation, Node.js and Express.js for the backend, and MongoDB for data storage, this application offers a comprehensive solution for organizing and overseeing events.',
    image: eventImg,
    tags: ['React Js', 'MongoDb', 'Node Js', 'Express Js', 'JWT'],
    category: 'mern app',
    github: 'https://github.com/amehta7/MERN_Events_App',
  },
  {
    id: 2,
    title: 'Foody API',
    description:
      'Designed and implemented the Foody API, a robust back-end application built using Node.js, Express.js, and MongoDB. This API serves as a versatile and efficient solution for recipe tracking, allowing users to register accounts, create recipes, add ingredients, and manage their profiles.',
    image:
      'https://ae01.alicdn.com/kf/Hb2aefc02adff4e999470c3216a328e45P.jpg_640x640q90.jpg',
    tags: ['MongoDb', 'Node Js', 'Express Js', 'JWT'],
    category: 'api',
    github: 'https://github.com/amehta7/Foody_API',
  },
  {
    id: 3,
    title: 'Eshop API',
    description:
      'Designed a powerful and scalable back-end application using Node.js, Express.js, and MongoDB. This RESTful API is tailored for eCommerce purposes, featuring essential functionalities such as user authentication, address management, order creation, and comprehensive product management. The use of JWT (JSON Web Tokens) ensures secure authentication, making it a robust solution for powering eCommerce applications.',
    image:
      'https://i0.wp.com/mercadoeconsumo.com.br/wp-content/uploads/2020/06/Faturamento-do-e-commerce-cresce.jpg?fit=1200%2C800&ssl=1',
    tags: ['MongoDb', 'Node Js', 'Express Js', 'JWT'],
    category: 'api',
    github: 'https://github.com/amehta7/Eshop_API',
  },
  {
    id: 4,
    title: 'Todo API',
    description:
      'The Todo API is a back-end application developed using TypeScript, Node.js, and Express.js, designed for efficient task management. This API allows users to interact with a list of tasks by viewing existing tasks, adding new tasks, and removing tasks from the list. Developed with TypeScript, the application ensures type safety and provides a robust foundation for building scalable and maintainable task management systems.',
    image:
      'https://camo.githubusercontent.com/fb698c0975927b6548ac1ce69e496e86f27e09df0fb7b7f4b3b0bd943cd38fc5/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f69636874726f6a616e2f696d6167652f75706c6f61642f76313537343935383337332f53637265656e73686f745f323031392d31312d32385f61745f31372e32322e32355f6779656764722e706e67',
    tags: ['TypeScript', 'Node Js', 'Express Js'],
    category: 'api',
    github: 'https://github.com/amehta7/Todo_API',
  },
  {
    id: 15,
    title: 'Meetups',
    description:
      'Meetups is a project crafted to showcase the capabilities of Next.js, featuring a dynamic web application for viewing and adding meetups. Developed using Next.js, React, and MongoDB, this project leverages the advantages of server-side rendering and a modern frontend framework to provide a seamless and interactive experience for users interested in exploring or organizing meetups.',
    image: meetupImg,
    tags: ['Next JS', 'MongoDb', 'React'],
    category: 'nextjs app',
    github: 'https://github.com/amehta7/NextJS_React_Meetups',
  },
  {
    id: 5,
    title: 'Todo App',
    description:
      'The Todo App is a front-end application developed with React and TypeScript which allows users to interact with a list of tasks by viewing existing tasks, adding new tasks, and removing tasks from the list. The use of TypeScript ensures type safety, enhancing code quality and developer productivity.',
    image:
      'https://reactjsexample.com/content/images/2023/04/code_2023-08-22-41-22.jpg',
    tags: ['React', 'TypeScript'],
    category: 'typescript app',
    github: 'https://github.com/amehta7/TypeScript_Todo_App',
  },
]
