import React from "react";

const CategoryPage = ({ category }) => {
  const content = {
    Paisajes: [
      {
        title: "Campos de tulipanes, Países Bajos.",
        description: "Un lugar lleno de paz y tranquilidad.",
        image:
          "https://www.airpano.com/photogallery/images_1550/82_076112_HollandThecountryoftulips.jpg",
        link: "https://www.airpano.com/360photo/holland-tulips/",
      },
      {
        title: "Santa Claus Village.",
        description:
          "Un pequeño recorrido por donde vive Santa. (Tiene música)",
        image:
          "https://www.airpano.com/photogallery/images_1550/329_773868.jpg",
        link: "https://www.airpano.com/360photo/lapland-xmas/",
      },
      {
        title: "Guilin National Park, China.",
        description: "Mucho verde e historia en este lugar. (Tiene música)",
        image:
          "https://www.airpano.com/photogallery/images_1550/8_970548_GuilinNationalParkChina.jpg",
        link: "https://www.airpano.com/360photo/guilin-national-park-china/",
      },
      {
        title: "Reserva natural de pandas.",
        description:
          "En esta reserva puedes ver pandas con nombres como Fu wa y a Jing Ao le puse Naruto. (Tiene música)",
        image:
          "https://www.airpano.com/photogallery/images_1550/246_969549.jpg",
        link: "https://www.airpano.com/360photo/china-pandas-1/",
      },
      {
        title: "Full Moon.",
        description:
          "Lo más cerca que estuve para bajarte la luna. (Tiene música)",
        image:
          "https://www.airpano.com/files/maldives-full-moon/images/image1.jpg",
        link: "https://www.airpano.com/360photo/maldives-full-moon/",
      },
    ],

    // Parte de medicina

    Medicina: [
      {
        title: "Web Interactiva.",
        description:
          "En esta página vas a encontrar una especie de atlas virtual donde puedes seleccionar tu tema de interés, por ejemplo, Cardiovascular System, y te lleva a un apartado donde puedes ir seleccionando, moviendo y explorando, con un apartado 3D.",
        image:
          "https://i.pinimg.com/736x/a3/51/c5/a351c5ffb2de1d0cbe8b0ff7a0ec1290.jpg",
        link: "https://www.innerbody.com/htm/body.html",
      },
      {
        title: "MedScape.",
        description:
          "Vas a encontrar diferentes articulos con casos clinicos, para analizar o leer y sacar tus conclusiones.",
        image:
          "https://i.pinimg.com/736x/61/7f/e0/617fe05706de71d27de92bb2db4c563a.jpg",
        link: "https://espanol.medscape.com/index/list_12474_0?form=MG0AV3",
      },
      {
        title: "Leonora.",
        description:
          "Una plataforma que te permite crear y resolver casos clínicos en línea.",
        image:
          "https://i.pinimg.com/736x/7f/e8/1d/7fe81d8ed1dce02519b59685c4edae04.jpg",
        link: "https://leonora.ai/",
      },
      {
        title: "Un Drive que me robe.",
        description:
          "Como dice el titulo, en este drive tenes de todo, libros, resumenes, pdf, examenes y demas, separados por año de carrera, cada carpeta tiene muchisimas cosas asique podes pasar un buen rato explorando (si me lo robe, pero no voy a ir presa...).",
        image:
          "https://i.pinimg.com/736x/40/06/c2/4006c2a06b4b4a973a58f20ba4982e7c.jpg",
        link: "https://drive.google.com/drive/folders/1jpIVhB71oAFLNNlgMVcZgaDxIEQSJKxN",
      },
    ],

    // parte de ocio

    Ocio: [
      {
        title: "Un lugar de audiolibros.",
        description:
          "Se que no te gusta leer desde una pantalla, y este lugar tiene varios titulos buenos, podcast incluso cursos todo en audio libro, por si alguna vez te interesa escuchar uno.",
        image:
          "https://i.pinimg.com/736x/18/28/4a/18284a5430a98c852c08f1a60e129238.jpg",
        link: "https://www.ivoox.com/landing/audiolibros-en-espanol-486",
      },
      {
        title: "Juegos de mesa.",
        description:
          "Una vez me dijiste que te estaban empezando a gustar mucho muchir, y pues hasta que te pueda ganar fisicamente en el TEG, te dejo esta pagina (Que podes usar conmigo ejem ejem) para explorar distintos juegos de mesas Online.",
        image:
          "https://i.pinimg.com/736x/fb/53/bf/fb53bfb0568270b8dcde80b0964716e9.jpg",
        link: "https://es.boardgamearena.com/",
      },
      {
        title: "GPS Radio.",
        description:
          "Esto es literalmente un GPS de radios de todo el mundo, podes explorar los gustos de cada pais o ir incluso a la radio favorita de Justin o Tom felton.",
        image:
          "https://i.pinimg.com/736x/ea/ea/fc/eaeafcb79c84ee978302106a206d9390.jpg",
        link: "https://radio.garden/",
      },
      {
        title: "Se Mozart.",
        description:
          "Pues si alguna vez queres ser profesional en el piano, entras aca y si tocas cualquier tecla no pasa nada, eres profesional (Perdi dos horas jugando en este lugar).",
        image:
          "https://i.pinimg.com/736x/c9/c4/06/c9c40691e4f13c7e93f91db83493d8e8.jpg",
        link: "https://touchpianist.com/",
      },

      {
        title: "Mini Juegos de monitos.",
        description:
          "En esta pagina tenes varios juegos con tematica de monos, te recomiendo el Monkey Mart.",
        image:
          "https://i.pinimg.com/736x/ca/71/f5/ca71f5df062a7d662dfee277364c6f85.jpg",
        link: "https://poki.com/es/monos?form=MG0AV3",
      },
    ],

    // Parte de Varios

    Varios: [
      {
        title: "Playlist.",
        description:
          "Esta playlist es para que las dos compartamos nuestros distintos gustos musicales, puedes escuchar las canciones que yo puse y vos ir agregando canciones tuyas.",
        image:
          "https://i.pinimg.com/736x/0a/4e/b7/0a4eb796b2a75eaff2e4b20d3ea6ff0b.jpg",
        link: "https://open.spotify.com/playlist/1zttiZDeauRvCFIzeX4YlV?si=b298e1dad23544a8&pt=0717e207d6f5439b0f75e5c37d3f5a48",
      },
      {
        title: "Conoce a Kena, tu ahijada.",
        description:
          "Te regale a Kuro porque te gustan los monos, y ahora sos la madrina de una hermosa monita, porque adoptar uno es ilegal.",
        image:
          "https://tribubuinzoo03.akamaized.net/apadrinamiento/images/kena-foto.jpg",
        link: "https://drive.google.com/file/d/1BasQpo4vEgVxgPzsBBQ3-R2UdS6pNab3/view?usp=sharing",
      },
    ],
  };

  const items = content[category] || [];

  return (
    <div style={styles.container}>
      {/* Título de la sección */}
      <h1 style={styles.title}>{category}</h1>

      {/* Párrafo explicativo */}
      {category === "Paisajes" && (
        <p style={styles.description}>
          En esta sección encontrarás un "viaje" a distintos lugares del mundo.
          Las imágenes en 360° te permitirán explorar como si estuvieras allí.
          Usa tu mouse y las teclas para navegar. ¡Espero que te guste!
        </p>
      )}
      {category === "Medicina" && (
        <p style={styles.description}>
          En esta sección hice un recopilado de distintas páginas que podrían
          ser de ayuda, interesantes o simplemente para perder el tiempo sin
          perderlo completamente.
        </p>
      )}
      {category === "Ocio" && (
        <p style={styles.description}>
          Esta sección es para cuando quieras pasar un rato de ocio chill. Esto
          es una especie de ensalada rusa, vas a encontrar de todo, algunas
          comunes y otras bastantes inovadoras.
        </p>
      )}
      {category === "Varios" && (
        <p style={styles.description}>
          Pequeños regalitos, porque nunca es suficiente.
        </p>
      )}

      {/* Lista de ítems */}
      {items.map((item) => (
        <div key={item.title} style={styles.item}>
          <img src={item.image} alt={item.title} style={styles.image} />
          <div style={styles.textContainer}>
            <h2 style={styles.itemTitle}>{item.title}</h2>
            <p style={styles.itemDescription}>{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              Ver más
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    color: "#fff",
    background: "#141414",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#f4f4f4",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    marginBottom: "30px",
    color: "#ccc",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "30px",
    backgroundColor: "#1e1e1e",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  image: {
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#f4f4f4",
  },
  itemDescription: {
    fontSize: "1rem",
    marginBottom: "15px",
    lineHeight: "1.5",
    color: "#ccc",
  },
  link: {
    fontSize: "1rem",
    color: "#61dafb",
    textDecoration: "none",
  },
};

export default CategoryPage;
