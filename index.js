const PORT = process.env.PORT || 3025
const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.json())

const frasesHoroscopo = [
  { id: 'Aries', text: 'Tendrás que organizar bien el tiempo hoy si quieres hacer todo lo que tienes en mente, ya que tu vida social se verá muy activada; es posible que recibas muchas invitaciones. Si optas por desplazarte por los alrededores, te lo pasarás de maravilla. Con la pareja, también te irá muy bien, tendrás su apoyo.' },
  { id: 'Geminis ', text: 'Eres una persona responsable, y hoy, todavía más; además, tu generosidad también se hará patente. Precisamente por eso, es posible que realices un trabajo con tu padre o en su casa; te sentirás satisfecho-a con lo que hagáis. Por último, si lo que te apetece es viajar, te lo pasarás estupendamente.' },
  { id: 'Leo', text: 'El día de hoy será perfecto para compartir actividades con tus amistades, además, te sentirás muy bien rodeado-a de diferentes personas. Tu lado más pasional estará un poco oculto y tenderás a controlar y racionalizar tus emociones. De todos modos, Leo, te lo pasarás de maravilla.' },
  { id: 'Libra', text: 'Tu encanto, amabilidad y prudencia atraerán hoy a casi todo el mundo que se encuentre cerca de ti, esto hará que, en general, los demás se sentirán a gusto en tu compañía. Si no tienes pareja, pero quieres tenerla, ahora será tu oportunidad. Además de divertirte, sabrás sacar partido de lo que se te presente.' },
  { id: 'Sagitario', text: 'La prudencia será lo más característico de ti hoy, tanto en tus acciones como en las relaciones. En general, tenderás a guardar tus sentimientos para ti solo-a, tal vez por miedo a que tus palabras sean malinterpretadas o confundan a los demás. En definitiva, esperarás a que sea otro quien dé el primer paso; querrás jugar sobre seguro.' },
  { id: 'Acuario', text: 'Tu personalidad tenderá a la inestabilidad hoy, precisamente por eso, los momentos de optimismo y alegría se alternarán con diferentes cambios repentinos de humor, aburrimiento y negatividad. En el plano afectivo tu comportamiento será reservado; andarás con pies de plomo y preferirás los ambientes tranquilos en los que puedas conversar.' },
  { id: 'Tauro', text: 'Tu inteligencia será lo que más destaque de ti durante todo este día. En tus relaciones sociales y familiares disfrutarás de una comunicación muy fluida y de armonía en diferentes sentidos. Por último, si te apetece salir a conocer lugares nuevos, los desplazamientos serán muy positivos para ti. ¡Que te diviertas!' },
  { id: 'Cancer', text: 'Tendrás un buen control de tus emociones hoy, aunque tenderás a racionalizarlo todo excesivamente. A pesar de que eres una persona muy afectuosa y cariñosa, te costará trabajo expresar verbalmente tus sentimientos. En general, los desplazamientos serán favorables, al igual que el acudir a espectáculos musicales, artísticos, etc.' },
  { id: 'Virgo', text: 'Será un buen día hoy para los viajes y desplazamientos; también podrás recibir noticias agradables de alguien que vive lejos de ti, tal vez, en otro país. Respecto al ámbito familiar, puede que tu madre no se encuentre bien de salud, o tal vez tenga otro tipo de problema. Deberías prestarle más atención.' },
  { id: 'Escorpio', text: 'Te está esperando hoy un día favorable para casi todo lo que hagas, por muy extraño o complicado que parezca. Además, podrías iniciar relaciones que no tienen por qué desarrollarse en el terreno sentimental, aunque existe la posibilidad de aventuras en este aspecto o en el puramente sexual.' },
  { id: 'Capricornio', text: 'Hoy te mantendrás en equilibrio; no estarás ni fantásticamente optimista, ni exageradamente pesimista, sino en un punto medio que se acerca muchísimo a la realidad. Capricornio, tendrás los pies firmemente plantados en el suelo y no tendrás problemas con nada ni con nadie. ¡Felicidades!' },
  { id: 'Piscis', text: 'Podrías tener hoy cierta sensación de descontento e insatisfacción en tu vida, bien debido a la pareja, o bien debido al ambiente familiar. Si a tu pareja no le apetece salir y a ti sí, no debes dejar de hacerlo: sal a dar una vuelta. Seguro que tienes a alguien con quien puedes contar. Piscis, te invadirá cierta melancolía.' }

]

server.get('/horoscopo/:code', (req, res) => {
  const code = req.params.code
  const horoscopo = frasesHoroscopo.find(horoscopo => horoscopo.id === code)
  if (horoscopo) {
    return res.end('<h1>()</h1>')
  } else {
    res.status(404).end()
  }
})

server.get('/horoscopo', (req, res) => {
  res.json(frasesHoroscopo)
})

// server.get('/', (req, res) => {
//   res.send(airlines)
// })
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})