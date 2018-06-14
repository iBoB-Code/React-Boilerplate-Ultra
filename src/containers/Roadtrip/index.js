import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { modalOpen, modalClose, ip } from 'REDUX/actions/roadtripActions';
import picTrippers from 'ASSETS/images/trippers.jpg';
import picTripadvisor from 'ASSETS/images/apps/tripadvisor.png';
import picAgoda from 'ASSETS/images/apps/agoda.png';
import picTricount from 'ASSETS/images/apps/tricount.png';
import picAirlines from 'ASSETS/images/apps/airlines.png';
import picConvert from 'ASSETS/images/apps/convert.png';
import Day from './components/Day';
import Photos from './components/Photos';

@connect(store => ({
  modalState: store.roadtrip.modalState,
  selectedPictures: store.roadtrip.selectedPictures
}))
export default class Roadtrip extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.props.dispatch(ip());
  }

  handleOpen(val) {
    this.props.dispatch(modalOpen(val));
  }

  handleClose() {
    this.props.dispatch(modalClose());
  }

  render() {
    return (
      <div className="roadtrip">
        <Modal
          open={this.props.modalState}
          onClose={this.handleClose}
          basic
          size="small"
        >
          <Modal.Content>
            <Photos selectedPictures={this.props.selectedPictures} />
          </Modal.Content>
        </Modal>
        <div className="menu">
          <div>
            <Icon name="home" size="big" style={{ margin: '10px 0 0 10px', cursor: 'pointer' }} onClick={() => this.props.history.push('/')} />
          </div>
          <ul>
            <li><a href="#a-viet" className="title">VIETNAM</a></li>
            <li><a href="#a-day1">Jour 1</a></li>
            <li><a href="#a-day2">Jour 2</a></li>
            <li><a href="#a-day3">Jour 3</a></li>
            <li><a href="#a-day4">Jour 4</a></li>
            <li><a href="#a-day5">Jour 5</a></li>
            <li><a href="#a-day6">Jour 6</a></li>
            <li><a href="#a-day7">Jour 7</a></li>
            <li><a href="#a-day8">Jour 8</a></li>
            <li><a href="#a-day9">Jour 9</a></li>
            <li><a href="#a-day10">Jour 10</a></li>
            <li><a href="#a-day11">Jour 11</a></li>
            <li><a href="#a-day12">Jour 12</a></li>
            <li><a href="#a-day13">Jour 13</a></li>
            <li><a href="#a-day14">Jour 14</a></li>
            <li><a href="#a-day15">Jour 15</a></li>
          </ul>
          <ul>
            <li><a href="#a-camb" className="title">CAMBODGE</a></li>
            <li><a href="#a-day16">Jour 16</a></li>
            <li><a href="#a-day17">Jour 17</a></li>
            <li><a href="#a-day18">Jour 18</a></li>
            <li><a href="#a-day19">Jour 19</a></li>
            <li><a href="#a-day20">Jour 20</a></li>
            <li><a href="#a-day21">Jour 21</a></li>
            <li><a href="#a-day22">Jour 22</a></li>
            <li><a href="#a-day23">Jour 23</a></li>
          </ul>
          <ul>
            <li><a href="#a-thai" className="title">THAILANDE</a></li>
            <li><a href="#a-day24">Jour 24</a></li>
            <li><a href="#a-day25">Jour 25</a></li>
            <li><a href="#a-day26">Jour 26</a></li>
            <li><a href="#a-day27">Jour 27</a></li>
            <li><a href="#a-day28">Jour 28</a></li>
            <li><a href="#a-day29">Jour 29</a></li>
            <li><a href="#a-day30">Jour 30</a></li>
            <li><a href="#a-day31">Jour 31</a></li>
            <li><a href="#a-day32">Jour 32</a></li>
            <li><a href="#a-day33">Jour 33</a></li>
            <li><a href="#a-day34">Jour 34</a></li>
            <li><a href="#a-day35">Jour 35</a></li>
            <li><a href="#a-day36">Jour 36</a></li>
            <li><a href="#a-day37">Jour 37</a></li>
            <li><a href="#a-day38">Jour 38</a></li>
            <li><a href="#a-day39">Jour 39</a></li>
            <li><a href="#a-day40">Jour 40</a></li>
            <li><a href="#a-day41">Jour 41</a></li>
            <li><a href="#a-day42">Jour 42</a></li>
            <li><a href="#a-day43">Jour 43</a></li>
            <li><a href="#a-day44">Jour 44</a></li>
            <li><a href="#a-day45">Jour 45</a></li>
            <li><a href="#a-day46">Jour 46</a></li>
            <li><a href="#a-day47">Jour 47</a></li>
            <li><a href="#a-day48">Jour 48</a></li>
            <li><a href="#a-day49">Jour 49</a></li>
            <li><a href="#a-day50">Jour 50</a></li>
            <li><a href="#a-day51">Jour 51</a></li>
          </ul>
        </div>
        <div className="container">
          <h1>✈️ LE ROADTRIP ✈️</h1>
          <Image shape="circular" src={picTrippers} />
          <section className="intro">
            <div className="about">Salut! Moi c’est Dylan, j’ai passé deux mois à voyager en Asie du Sud-est avec 4 potes, et voici un bref résumé en images de comment s’est passé mon voyage.</div>
            <Card>
              <Card.Content header="Généralités" />
              <Card.Content>
                <ul>
                  <li>
                    <div className="head">
                      <Icon size="big" name="write" />
                      <h3>{'Des fautes d\'orthographe ?'}</h3>
                    </div>
                    {'Je m\'excuse par avance si vous en trouvez dans les centaines de lignes ci-dessous, mais il faut savoir que ce site a été codé et entièrement rédigé sans oublier le tri des photos en moins d’une semaine… Donc la relecture n’est pas encore passée par là…'}
                  </li>
                  <li>
                    <div className="head">
                      <Icon size="big" name="picture" />
                      <h3>Où sont toutes les photos ?</h3>
                    </div>
                    <div className="body">
                      Clique ici
                      <Button onClick={() => this.handleOpen(0)} style={{ marginLeft: '5px' }} icon="camera retro" size="tiny" />
                    </div>
                  </li>
                  <li>
                    <div className="head">
                      <Icon size="big" name="suitcase" />
                      <h3>Vous êtes partis avec quoi ?</h3>
                    </div>
                    <div className="body">Un sac à dos chacun, entre 9 et 12 kg : pour ma part dedans j’avais des vêtements, une trousse de toilette, une trousse de premier secours, des médicaments, du matériel vidéo et audio et de quoi parer à tout imprévu sachant aussi qu’on allait faire une bonne partie du voyage à moto sur des véhicules de location (corde, briquet, super glue, serreFlex, couteau suisse avec pince et tourne-vils multi-têtes… etc)</div>
                  </li>
                  <li>
                    <div className="head">
                      <Icon size="big" name="doctor" />
                      <h3>Des vaccins ?</h3>
                    </div>
                    <div className="body">OUI ! Rage, Encéphalite Japonaise, hépatites A-B et médication préventive pour le Palu.</div>
                  </li>
                  <li>
                    <div className="head">
                      <Icon size="big" name="mobile" />
                      <h3>Vos applications de voyage ?</h3>
                    </div>
                    <div className="apps">
                      <div className="app">
                        <div>
                          <Image src={picTripadvisor} avatar />
                          <h4>TripAdvisor :</h4>
                        </div>
                        <span>{'pour les restos et les activités. On a (quasi) jamais été déçus et grâce à ça on a pu tous les jours réussir à manger de la nourriture de relativement bonne qualité pour pas cher. Et la liste des choses à faire proposée dans chaque lieu permet vraiment d\'optimiser le temps pour les visites.'}</span>
                      </div>
                      <div className="app">
                        <div>
                          <Image src={picAgoda} avatar />
                          <h4>Agoda :</h4>
                        </div>
                        <span>pour les hôtels : on vivait vraiment au jour le jour à ce niveau-là et il nous arrivait de réserver des chambres d’hôtels à prix complètement cassés même une demie heure avant d’arriver à l’hôtel en question. Je pense qu’en moyenne sur tout le voyage on a dû payer 5€ la nuit chaque jour.</span>
                      </div>
                      <div className="app">
                        <div>
                          <Image src={picTricount} avatar />
                          <h4>Tricount :</h4>
                        </div>
                        <span>l’application INDISPENSABLE si vous voyagez à plusieurs. Le principe est simple, un seul membre du groupe paie à chaque activité/resto/hotel et l’appli fait elle-même la balance en disant à qui le tour de payer : à la fin du voyage on a juste à finir d’équilibrer en payant un petit montant à une seule personne du groupe, plus de soucis de calculs de « combien je dois à qui ? ».</span>
                      </div>
                      <div className="app">
                        <div>
                          <Image src={picAirlines} avatar />
                          <h4>Asia Airlines :</h4>
                        </div>
                        <span>généralement les meilleurs prix pour les avions.</span>
                      </div>
                      <div className="app">
                        <div>
                          <Image src={picConvert} avatar />
                          <h4>Un convertisseur :</h4>
                        </div>
                        <span>{'bon clairement pas besoin de faire un dessin... Mais il y a un temps d\'adaptation avant de réussir à tout faire de tête!'}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="head">
                      <Icon size="big" name="signal" />
                      <h3>Et le réseau dans tout ça ?</h3>
                    </div>
                    <div className="body">J’ai pris une carte SIM avec de la 3G dans chaque pays : ça coûte vraiment pas cher et ça permet d’être plus libre pour utiliser les applications ci-dessus et moins dépendant d’éventuels réseaux wifi (nombreux certes).</div>
                  </li>
                </ul>
              </Card.Content>
              <Card.Content extra>
                <Icon name="question mark" />
                {'Une autre question? Dites le moi et j\'ajoute la réponse ici.'}
              </Card.Content>
            </Card>
          </section>
          <section className="country vietnam" id="a-viet">
            <header>
              <div className="overlay" />
              <div className="title">
                <h2>LE VIETNAM</h2>
              </div>
            </header>
            <article id="a-day1">
              <Day
                num={1}
                text={[
                  'Après une courte sieste de 2 heures : réveil minuit pour aller rejoindre Charly à la gare de Séoul et prendre un train pour l\'aéroport international de Incheon. On tente de se reposer un peu sur le sol de l\'aéroport sans succès et on prend enfin notre vol pour Hanoï à 6h du matin. Une fois atterris à 12h30 heure locale, on retrouve nos deux compères qui venaient déjà de passer une semaine au Laos : Fred et Thibault. On regarde vite fait les taxis, mais après avoir lu quelques blogs en ligne avant de partir, je savais que les moyens de transport recommandés pour rejoindre le centre-ville (l\'aéroport est excentré) était le bus public, ou bien à la limite les sortes de minibus privés que vous verrez partout en Asie du sud-est. On opte pour la seconde solution.',
                  'Il est grand temps de manger et on choisit de suivre une suggestion de Trip Advisor pour (on ne le savait pas encore) la pire idée de restaurant des 50 jours qui suivront ! Cha Ca La vong : retenez ce nom est évitez-le, les portions étaient ridicules (la nourriture était pour 4 personnes même si la portion aurait pu être engloutie par un seul d’entre nous) et le prix astronomique (2 fois le prix d’un repas normal au Vietnam) …',
                  'Pour ce premier jour, on décide de se promener dans la vielle ville et ses alentours. Petit tour au Long Bien Bridge, vestige de l’influence coloniale française de l’époque puisque construit par une société du Groupe Eiffel en 1963, puis on s’enfonce dans les ruelle du cœur de Hanoï. Ce qui frappe, à peine un pied mis dans cette ville, c’est le chaos et le brouhaha constant qui qui règne de pars la circulation massive de scooters sur des routes mal entretenues : ici, pas de clignotants, la priorité est au plus gros et on klaxonne au moins toutes les 4 secondes pour signaler sa position aux autres… Un vrai bordel organisé !',
                  'Traverser la route ? Ne cherchez pas de feux : fermez les yeux et avancez juste tout droit à vitesse constante, c’est aux véhicules de vous éviter !',
                  'Pour chercher un peu de calme dans tout ça, on se rends au Café Pho Co pour y tester une spécialité de la ville : le café à l’œuf ! L’entrée n’est pas facile à trouver : vous traversez tout d’abord une sorte de boutique de tissu puis vous vous enfoncez dans un couloir de l’arrière-boutique pour déboucher dans une petite cour très cosy. Passez commande puis montez plusieurs escaliers pour vous retrouver sur le toit du bâtiment et profiter d’une magnifique vue sur le lac Hoan Kiem. (Et le café à l’œuf vaut vraiment le coup !)',
                  'Pour la soirée, on finit notre tour de la vielle ville en se promenant autour du lac.',
                  'À la fin de cette première journée, ce qui choque, plus encore que ce vacarme permanent, c’est le sous-développement de ce pays, la précarité dans laquelle vivent la plupart des habitants, et les conditions d’hygiène de vie douteuses qui règnent dans chaque rue et chaque bâtiment… Et ce sentiment sera présent pour les 50 prochains jours : mais nous en reparlerons dans ma conclusion.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/65049d13cbd4d893f5c51a180dd5adbc/5B3F212A/t51.2885-15/s750x750/sh0.08/e35/26275960_543998795969087_7569861060128145408_n.jpg"
                handleOpen={this.handleOpen}
                heart={3}
              />
            </article>
            <article id="a-day2">
              <Day
                num={2}
                text={[
                  'Cette journée est consacrée à la visite des principaux monuments de la ville.',
                  'Tout d’abord on passe par le temple de la littérature de Hanoï : un peu frustrant… Tout est très beau mais… On sent que ce n’est qu’une façade pour y attirer les touristes : la plupart des bâtiments ont été reconstitués de toutes pièces et la foule irrespectueuse ne pense qu’à prendre des selfies dans tous les sens en brayant… Tout ça casse un peu le charme du lieu.',
                  'On se dirige ensuite vers le palais du Général Ho Chi Minh, son mémorial et toutes les installations gouvernementales adjacentes datant de l’époque de la République Démocratique du Vietnam, alors que le pays était divisé par la guerre. C’est d’ailleurs à ce moment-là du voyage que j’ai commencé à m’intéresser à cette partie de notre histoire : de la colonialisation française de l’Indochine à aujourd’hui en passant bien sûr par la guerre du Vietnam. On en parle bien trop peu à mon goût dans la scolarité Française…',
                  'On effectue rapidement une boucle en traversant un pont au-dessus de l’eau pour voir la pagode Tran Quoc et on replonge encore une fois dans une partie un peu plus sombre de l’histoire avec la visite de la Prison Hoa Lo (maintenant transformée en musée). Construite par la France à l’époque coloniale, elle servait à emprisonner des révolutionnaires de l’époque. Cependant, surpeuplée, les traitements infligés à l’époque sont vraiment prenants et cette visite ne laisse pas indifférent…'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/f06ebf0981407d40e0a4cc4a1f72cc99/5B46C145/t51.2885-15/s750x750/sh0.08/e35/26158374_204737726755851_8632349932373671936_n.jpg"
                handleOpen={this.handleOpen}
                heart={3}
              />
            </article>
            <article id="a-day3">
              <Day
                num={3}
                text={[
                  'Aujourd’hui on bouge : direction la baie de Ha Long ! On avait réservé la veille avec notre hôtel un bus pour se rendre sur place et visiter par nous-mêmes une fois là-bas, mais dans le transport un guide commence à expliquer le déroulement de la journée à certaines personnes qui effectuaient des visites avec lui : on décide donc de suivre le mouvement et de nous joindre à eux puisque le programme nous plaisait.',
                  'Une fois sur une aire d’autoroute pour une pause je vais voir le guide pour lui demander le prix, il me prend à part discrètement et me dit que pour nous ça sera moins cher puisque on passe directement par lui et pas par sa compagnie (oui il va falloir s’y faire ici l’argent est au centre de tout, et oubliez toute forme de régulation, le black est monnaie courante, tout s’achète, tout se négocie : CASH). Je lui explique que pour le moment par contre on n’a pas de liquide sur nous et qu’il faut donc qu’on retire : pas de soucis !',
                  'On finit de traverser l’aire d’autoroute ou des femmes s’affairent à confectionner des tapisseries et des peintures à la chaine pour nous les vendre pendant que des hommes font de même avec des statues. Ah et oui j’ai dit traverser : car le bus nous attend de l’autre côté du bâtiment pour être sûr que l’on ne manque rien de tous les achats potentiels… Arrangement entre les bus et la station vous dites ? Je vous avais prévenu : tout tourne autour de l’argent dans ce pays, disons juste que c’est fait de façon plus ostentatoire que dans notre culture !',
                  'Le bus nous dépose finalement au port de Tuan Chau, sur une presque-île de la baie d’Ha Long. On attend un petit quart d’heure que le guide s’occupe de tous les tickets, et on embarque alors sur un ferry direction des paysages de carte postales : c’était mon premier moment WOW du roadtrip. Le repas nous était servi pendant la croisière mais j’ai passé la majorité de mon temps sur le pont pour profiter, m’émerveiller et bien sûr prendre des photos.',
                  'On arrive à notre première destination : une magnifique grotte sur une petite île de la baie. La visite est bien mais encore une fois gâchée par la foule bien trop importante… Première rencontre avec les groupes de touristes chinois : on n’a jamais vu des gens aussi irrespectueux, et ça se confirmera pendant tout le roadtrip. Ils crient, crachent, poussent, ne tiennent pas leurs enfants… Bref on en reparlera…',
                  'Deuxième étape, une petite balade dans un bateau à rames dans lequel je monte avec Fred pendant que Charly et Thibault optent pour l’option kayak.',
                  'Une fois la croisière terminée, le bus nous dépose un peu au milieu de nulle part en nous disant qu’on devrait facilement trouver un taxi ici (nous avions prévu de rester un peu plus dans les alentours et de ne pas juste faire l’aller-retour en un jour comme les autres passagers). Et à ce moment-là on découvre la face cachée de ce tourisme de masse : les photos parlent d’elles-mêmes.',
                  'Bref il est temps de nous rendre à notre hôtel ! Il est important pour la suite de l’histoire de spécifier que nous logons pour cette nuit dans la ville de Bai Chay.',
                  'On réussit très vite à trouver un taxi et on lui demande tout de suite d’enclencher le taximètre (IMPERATIF ici pour éviter une quelconque arnaque !). On monte, le chauffeur est très aimable et souriant, on lui indique l’adresse et en route : Fred à l’avant avec le trajet GPS activé pour vérifier que le taxi se rend au bon endroit. Et alors là s’en suit une scène à cheval entre amusement et énervement : on s’est fait baladés pour 2 fois le prix de la course. Le chauffeur a évité à plusieurs reprises les sorties qu’on lui indiquait et nous a fait traverser le pont menant à la ville d’Ha Long tout en rigolant à chaque fois et en nous montrant à quel point la ville était belle… Et puis il s’est décidé à faire demi-tour, retraverser le pont et à nous amener finalement à notre hôtel sous la surveillance de Fred…',
                  'Une fois arrivés, on réussit à le convaincre de diviser le prix de la course par deux en lui disant que son trajet n’était pas du tout normal.',
                  'On termine la soirée par une promenade dans la ville côtière après le repas.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/7063833a2bf0f1db0d033db0f6859ed7/5B2C8A78/t51.2885-15/s750x750/sh0.08/e35/26065289_965832280222761_4321883619820830720_n.jpg"
                handleOpen={this.handleOpen}
                heart={4}
              />
            </article>
            <article id="a-day4">
              <Day
                num={4}
                text={[
                  'Réveil, petit déjeuner dans une boulangerie trouvée la veille, et direction le port de la veille en taxi (sans arnaque cette fois, mais non sans méfiance de notre part).',
                  'On achète des tickets pour un ferry afin de se rendre sur l’île de Cat Ba : beaucoup moins touristique que le reste de la baie. Une fois arrivés au nord de l’ile en bateau, on prend maintenant un bus local (en évitant les taxis nous annonçant des prix astronomiques) pour traverser l’île et se rendre dans la ville principale au sud de cette dernière. Le trajet est très original et on rigole bien en voyant que le bus sert aussi de car scolaire, s’arrêtant dans chaque petit village de l’île, et ramassant des élèves en uniforme ! Le bus devient vite surchargé mais pas de soucis, les gens s’entassent sur les genoux des uns et des autres pendant que l’assistant du chauffeur fait ce qui semblait être l’appel et qu’un élève mettait de la musique techno à fond avec son enceinte ! Bref une traversée originale !',
                  'On pose les sacs à l’hôtel et on part manger dans un restaurant où j’ai pu gouter ma première noix de coco.',
                  'Pour le reste de l’après-midi on décide de faire le tour des plages de l’ile et de profiter de premiers rayons de soleil du voyage (on était en polaire jusque-là) pour même s’essayer à la baignade même si l’eau était très froide. Les paysages sont paradisiaques …'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/2901b52d459b04882335e949c29b48d3/5B40BF61/t51.2885-15/sh0.08/e35/p750x750/26158787_1944171372511679_4551837878245654528_n.jpg"
                handleOpen={this.handleOpen}
                heart={4}
              />
            </article>
            <article id="a-day5">
              <Day
                num={5}
                text={[
                  'Aujourd’hui : grosse expédition. Je pars avec Charly pour une randonnée de 15km à travers la jungle. On perd deux membres pour cette activité car Thibault ne se sent pas de nous suivre et Fred est blessé au pied.',
                  'On rejoint l’entrée du parc naturel de l’île et donc le départ de la randonnée en taxi cette fois. J’avais repéré le trajet à effectuer grâce à une application : Wikiloc. Mais il ne faut pas se tromper de chemin car plusieurs itinéraires de randonnée existent : et bien ça ne loupe pas, on achète les mauvais tickets (et oui l’entrée du parc naturel est payante) et après quelques minutes de marche et coups d’œil au GPS je me rends compte que l’on est pas sur la bonne voie : on rebrousse chemin pour ensuite payer un peu plus cher (évidemment) et emprunter la bonne route.',
                  'Au début… On est sceptiques… Le chemin est en béton et ce qui devait être une randonnée ne s’avère être qu’une promenade sur une route dans une jungle pas très fournie…',
                  'Mais après quelques kilomètres : ça y est, l’aventure, la nature luxuriante et plus de route, juste quelques balises par ci-par là. Plus on s’enfonce plus le chemin en vient difficile à trouver ! Jusqu’à un point où on le perd à plusieurs reprises, l’entretient de ce dernier n’étant pas régulier et la nature ayant repris ses droits. On escalade des collines, on descend dans des vallées pendant des heures et des heures, sans aucune idée d’où nous sommes et de quelle proportion du trajet nous avons déjà fait puisque aucun signal ne passe dans la jungle.',
                  'On finit par complètement perdre le chemin et on se dirige par rapport au soleil en traversant une autre vallée : face à la montagne on trouve un petit passage escarpé et balisé, on suit donc ce nouveau chemin dans lequel on grimpe même à une vielle échelle rouillée pour une fois arrivé au sommet profiter d’un magnifique panorama sur une grande pleine avec des champs cultivés, des vaches et un petit village. On mange en profitant de cette vue puis on se rend au village, on récupère un peu de réseau pour vérifier notre position GPS et on constate que même sans avoir pris la route exacte on est de retour sur la bonne voie.',
                  'Des habitants nous parlent d’un sommet pas loin avec un encore plus haut et plus beau panorama : on fonce. Il s’agit en fait d’une tour radio servant de relais pour le village et l’ascension est assez violente : la pente est très raide et le chemin escarpé. Mais le jeu en vaut la chandelle et on découvre une vue à 360 avec d’un côté la jungle traversée à perte de vue, et de l’autre la mer et l’archipel d’iles…',
                  'On redescend dans le hameau car la journée avance et il nous reste encore une bonne partie du trajet (même si maintenant il ne s’agit que de suivre la petite route connectant le petit village au port le plus proche).',
                  'Et là c’est le moment des sueurs froides : on arrive donc au bout du bout de notre périple, les jambes en morceaux avec 15km de jungle abattus derrière nous (donc pas de demi-tour possible), on trouve une sorte de bateau-ferry en bois amarré (le seul bateau) et là… Le capitaine nous fait comprendre qu’il n’ira pas à Cat Ba et qu’il a terminé sa journée !...',
                  'MAIS, rappelez-vous, ici tout s’achète : on lui demande donc combien il veut pour la traversée, il hésite, finit son sandwich et fini par nous accepter pour le double du prix normal…',
                  'Tout est bien qui finit bien et on profite alors d’une traversée privée sur le pont de ce petit bateau, allongés, en se laissant bercer par les embruns et le roulis en admirant un superbe coucher de soleil… Petit bonus, on traverse même un village flottant sur notre route !',
                  'Et c’est à postériori que je le réalise, mais c’est souvent les situations les plus imprévues qui laissent places aux meilleurs souvenirs, avec cette petite magie du hasard.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/40ae9975beddb6c46c9424f80b4324ae/5B3AA5B0/t51.2885-15/sh0.08/e35/p750x750/26871304_139843893357595_5053850736887070720_n.jpg"
                handleOpen={this.handleOpen}
                heart={5}
              />
            </article>
            <article id="a-day6">
              <Day
                num={6}
                text={[
                  'Aujourd’hui journée transition. Et oui c’est aussi ça le roadtrip : des jours entiers de transport, de fatigue, de siestes ! On part de Cat Ba en bus pour rejoindre un port à l’ouest de l’île pour y prendre un speedboat. On traverse un bras de mer pour gagner Hai Phong et y prendre un autre bus direction la vielle ville de Ha Long.',
                  'De là, sacs à dos toujours sur le dos, on va traverser le centre-ville à pieds pour aller manger dans un restaurant célèbre car Barak Obama lui-même y a pris un repas lors de sa présidence : Bun Cha Huong Lien.',
                  'Une fois sur place on découvre une gigantesque cantine sur 6 étages dans un batiment (où on comprend vite que les pièces de restaurant sont en fait d’anciens appartements vidés où des tables de camping ont été posées avec des tabourets) : une vraie fourmilière ou les serveurs courent partout avec les bras chargés de plateaux pour amener la spécialité de la maison à tous les clients : le Bun Cha. On attend quelques minutes qu’une table se libère pour pouvoir enfin manger.',
                  'On revient alors autour du lac visité lors de notre dernier passage dans la ville pour profiter de la journée rue piétonne autour de ce dernier et donc du calme qui y règne (rappelez-vous, les klaxons).',
                  'Le monde est petit et sur la route on rencontre 2 de étudiants de notre promo à Chung Ang, en voyage comme nous !',
                  'Une fois assis au bord du lac, on va avoir la curieuse surprise de se faire accoster par pleins d’étudiants et même des pères ou mère avec leurs enfants, qui vont poliment nous demander s’ils peuvent bavarder un peu en anglais avec nous ! Après plusieurs échanges un peu confus car on est un peu déroutés, on finit par demander s’il y a quelque chose de spécial avec nous pour que tout le monde nous demande ça, et on nous explique alors que c’est quelque chose de courant, car très peu de personnes arrivent à prendre des cours d’anglais et que c’est monnaie courante de profiter de la présence d’étranger pour s’améliorer : car dans le monde du travail, les langues étrangères sont une plus-value non négligeable ! J’ai même discuté avec un père et sa fillette de 6 ans qui parlait mieux anglais que la plupart des personnes que je connais : elle parlait même français ! Bref encore une expérience très enrichissante.',
                  'Pour finir cette journée on se dirige alors vers l’aéroport en taxi pour passer la nuit dans un hôtel juste à côté et être plus proche le lendemain pour prendre notre vol.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/4db9b4523b42886802701418df92723c/5B4AE103/t51.2885-15/s750x750/sh0.08/e35/26152087_207339306492522_9011557001573957632_n.jpg"
                handleOpen={this.handleOpen}
                heart={2}
              />
            </article>
            <article id="a-day7">
              <Day
                num={7}
                text={[
                  'On perd Thibault ! Fin de l’aventure pour lui puisque son vol le ramènera à Séoul pendant que le nôtre nous emmènera cette fois à Da Nang, toujours au Vietnam.',
                  'On arrive à midi avec Charly et on attend Fred qui était sur un autre vol légèrement en décalé.',
                  'On prend le taxi tous les 3 pour rejoindre notre hôtel le long de la côte. Et à partir de là on va juste se balader un peu et se renseigner pour une éventuelle location de 2 roues le lendemain.',
                  'La première impression n’est pas vraiment géniale… Le temps est gris, on ressort les polaires, et les immeubles en construction le long de la plage gâchent un peu le panorama.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/5efcc260ab26d29faf3fcbfda7c2a005/5B3121F0/t51.2885-15/s750x750/sh0.08/e35/26269418_2060194727602916_4229848191563988992_n.jpg"
                handleOpen={this.handleOpen}
                heart={1}
              />
            </article>
            <article id="a-day8">
              <Day
                num={8}
                text={[
                  'Le temps s’éclairci et on part en 2 roues direction la ville voisine de Hoi An.',
                  'On commence par se rendre à notre nouvel hôtel (qui se trouve sur l’ilot An Hoi de la rivière qui coule le long de la ville) pour y poser nos affaires.',
                  'Sans plus tarder on repart pour le village écologique de Tra Que, à seulement quelques minutes de Hoi An. Ce village est situé sur un l’ilot d’une rivière et a la particularité d’être recouvert de jardins et autres potagers où les locaux cultivent leurs fruits et légumes. On pose alors nos bolides et on décide de faire le tour de Tra Que à pieds.',
                  'Et c’est pendant notre petite ballade qu’on va faire une drôle de rencontre : un drôle de monsieur moustachu, la soixantaine qui se fait appeler Papy Bouddha. En train de fumer sa cigarette sur sa terrasse, il entend qu’on parle français et nous interpelle. On échange des banalités et il finit par nous raconter un peu sa vie ici, comment il en est venu à s’expatrier, qu’il a tenu un des meilleurs restaurants de la ville pendant plusieurs années, que tout le monde le connait, qu’il accueille souvent des étrangers pour leur faire visiter les environs maintenant qu’il est à la retraite, il nous montre sa page Facebook, nous parle de son fils, un célèbre photographe dont les clichés vous diraient sûrement quelque chose. Il nous invite d’ailleurs à aller jeter un œil au musée de son fils, gratuit, où sont réunies bon nombre de photos ainsi que les histoires de quasi toutes les tribus vietnamiennes, avec les tenues traditionnelles exposées. La conversation se fini avec une invitation de sa part à boire l’apéro au Cabanon ce soir.',
                  'On continue notre tour du village écologique puis en se dirigeant à nouveau ver Hoi An, on prend le temps de visiter les très belles rizières avoisinantes.',
                  'Enfin, de retour en ville, ballade dans les petites rues et, sans vraiment chercher, on tombe sur le fameux musé ! On s’y engouffre et on y passe un certain temps, à lire et à admirer tous ces témoignages de culture si particulières.',
                  'La nuit tombe et il est l’heure d’aller au Cabanon : on y retrouve Papy Bouddha ainsi qu’un jeune couple de Lyonnais et une Normande à qui il fait découvrir la ville. On passe une excellente soirée à l’écouter parler de son histoire et à échanger sur nos expériences de voyages tous ensemble. Ah oui, et on est vraiment comme à la maison : le patron du bar est marseillais ! Il finit par nous rejoindre en nous offrant au passage des toasts au pâté maison ! Vous n’imaginez même pas à quel point c’était bon : c’est à ce moment-là que j’ai réalisé que ça faisait 6 mois que je n’en avais pas mangé, un régal !',
                  'On continue la soirée en se rendant avec tout le groupe dans un restaurant de street food non loin. On admire aussi au passage la beauté de cette petite ville de nuit, encore plus chaleureuse que de jour avec toutes ses lanternes allumées au-dessus de l’eau.',
                  'Pour ses rencontres et ses paysages : Hoy An est mon coup de cœur du Vietnam : allez-y les yeux fermés et si vous le pouvez, essayer de rencontrer ce drôle de bonhomme, vous ne le regretterez pas.'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/5fa0f3ef21b1429ff2d472fbe351f75d/5B3A1CAE/t51.2885-15/s750x750/sh0.08/e35/26156736_162755251012595_4644831097094406144_n.jpg"
                handleOpen={this.handleOpen}
                heart={5}
              />
            </article>
            <article id="a-day9">
              <Day
                num={9}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'
                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/14384f862b92a330f7e8395eb0598e1a/5B359559/t51.2885-15/s750x750/sh0.08/e35/26870664_332044237297918_6527703734133194752_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day10">
              <Day
                num={10}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/bce860770d18590ba22c8cd1d5728fae/5B4A32B5/t51.2885-15/s750x750/sh0.08/e35/26279112_330393610792043_6310246271466602496_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day11">
              <Day
                num={11}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/3524e92f49bc3a2f8d42792f98825cbc/5B462D4F/t51.2885-15/e35/26362802_172631310173263_4824555017207808000_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day12">
              <Day
                num={12}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/31c273dc4b8860e4dc9ff71bdf5419e7/5B3F9C2E/t51.2885-15/e35/26222775_554845788203247_2234954702842232832_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day13">
              <Day
                num={13}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/d27fd0e5c8fd10e252a09bcac1d146fe/5B4116F6/t51.2885-15/e35/26268773_517869208612551_4499270648228478976_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day14">
              <Day
                num={14}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/cb155cf6e83809fb89b503e173d6872b/5B2C0A57/t51.2885-15/e35/26323463_909473185886464_1540103018110779392_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day15">
              <Day
                num={15}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/e61863f3e89273d3b067ff0ac8923d6b/5B3698B4/t51.2885-15/e35/26864121_1896867327309345_1757929933864173568_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
          </section>
          <section className="country cambodge" id="a-camb">
            <header>
              <div className="overlay" />
              <div className="title">
                <h2>LE CAMBODGE</h2>
              </div>
            </header>
            <article id="a-day16">
              <Day
                num={16}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/ab31e9efc63aaa503fc9f3b35aac6d93/5B37856A/t51.2885-15/e35/26072820_806984259493082_8234576819064406016_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day17">
              <Day
                num={17}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/b664e2f5798d5e8f15f746917b20562f/5B49EEBB/t51.2885-15/s750x750/sh0.08/e35/26072859_141763679834266_731244505998557184_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day18">
              <Day
                num={18}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/3d8de58a24de728891e0b85d7a854e5c/5B2E108C/t51.2885-15/e35/26355255_1955870271326503_3526657325316177920_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day19">
              <Day
                num={19}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/51a378364f545ddc18cc330d69bb47d4/5B474364/t51.2885-15/e35/26869605_289971884863307_2565294385767907328_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day20">
              <Day
                num={20}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/55710816a1f67b1aff8619b53884d816/5B391394/t51.2885-15/s750x750/sh0.08/e35/26867689_209187492974818_2347791203174449152_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day21">
              <Day
                num={21}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/faa89e5a48b0095938e9d23162ba6104/5B27C263/t51.2885-15/s750x750/sh0.08/e35/26872530_205061530074513_6044661892067098624_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day22">
              <Day
                num={22}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/887747a616f14140952d60c12c663e48/5B3507FB/t51.2885-15/s750x750/sh0.08/e35/26866887_211274519435091_5714814906314784768_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day23">
              <Day
                num={23}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/124fb9fd2018aa0de5ccf90bf8290015/5B2E6C31/t51.2885-15/e35/26864397_182303632529027_5539185876740866048_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
          </section>
          <section className="country thailande" id="a-thai">
            <header>
              <div className="overlay" />
              <div className="title">
                <h2>LA THAILANDE</h2>
              </div>
            </header>
            <article id="a-day24">
              <Day
                num={24}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/f55fe6b6df861b086d6d043738137312/5B2B566D/t51.2885-15/e35/26864952_164033770903219_2179833547831902208_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day25">
              <Day
                num={25}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/fbf338b5b86a8b8bffd2e3d2548062cd/5B4089EB/t51.2885-15/e35/26869469_116892965794203_5539050954638229504_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day26">
              <Day
                num={26}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/926e4cfb762c05eb0becb964763066e4/5B4223D5/t51.2885-15/e35/26868160_1728818077162990_7429021072378298368_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day27">
              <Day
                num={27}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/3fae495a9cd1403d62e6cf0d1b025a15/5B2DF68F/t51.2885-15/e35/27573924_939589589524297_133160319936626688_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day28">
              <Day
                num={28}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/72a58dc7ffee9fc3811ac8744a8fb4d6/5B3333F9/t51.2885-15/e35/27580717_163312461115931_751629236829159424_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day29">
              <Day
                num={29}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/a3fc7976562cd5657e7bc33c291abf7a/5B4D2416/t51.2885-15/e35/27577110_196387104439761_3535046010625589248_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day30">
              <Day
                num={30}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/6a220b2a3e85a123244540c6ed5f152f/5B4A93A4/t51.2885-15/s750x750/sh0.08/e35/27578883_1814079101976350_5309367395117170688_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day31">
              <Day
                num={31}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/0c2453a5baf386dc1b16343afe90a90c/5B29D1D3/t51.2885-15/s750x750/sh0.08/e35/26867077_2004193589835633_5356877417107423232_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day32">
              <Day
                num={32}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/93e77a74548b90d973421bfa41d87f5f/5B44DC5A/t51.2885-15/e35/27573749_1964206603844138_5807267771033059328_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day33">
              <Day
                num={33}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/cd74c071e5de0b26997189e59a3c33aa/5B40AD1A/t51.2885-15/e35/27892360_183951422376999_592076832484884480_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day34">
              <Day
                num={34}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/5233423e75635bc3813eab7d1e9924f4/5B32D30B/t51.2885-15/e35/26872248_1494272777338671_7555208182197387264_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day35">
              <Day
                num={35}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/8d25142d1913acd76786607ed6aa43d4/5B2C8365/t51.2885-15/e35/27892278_160876744704487_3894034160502702080_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day36">
              <Day
                num={36}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/54a27539799bde2926c9a5130d4d367d/5B44D892/t51.2885-15/e35/27893583_1818751231750744_1674825447717732352_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day37">
              <Day
                num={37}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/3bcda98d1a222615aed8b5e38e78cf1d/5B3E891E/t51.2885-15/e35/27576576_1629249560473550_8229932975869919232_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day38">
              <Day
                num={38}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/0d4b29d5082ee4275c123f22ded0cb0a/5B3E3CF1/t51.2885-15/s750x750/sh0.08/e35/27890556_816962745155300_8652200068624941056_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day39">
              <Day
                num={39}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/ad1844133a6e4a3fad0d60ef28693cfa/5B427348/t51.2885-15/s750x750/sh0.08/e35/27580934_218365112057221_3620915266004713472_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day40">
              <Day
                num={40}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/6b487ee421ab1e875a7420331ddabe66/5B4BB564/t51.2885-15/e35/28151543_1656696477747364_6604233570242265088_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day41">
              <Day
                num={41}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/354f8653cb8b4bc062c05b42bf35d6f4/5B476FC4/t51.2885-15/e35/27581531_158194371645397_2245222294609723392_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day42">
              <Day
                num={42}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/67f4b5fcba7f18b4fa6a51e0e79d71b3/5B35EB0C/t51.2885-15/e35/28156739_588698334855968_5087588684249694208_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day43">
              <Day
                num={43}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/90f5f0ccfdccf5378ece95bacfac71bd/5B402831/t51.2885-15/e35/28152165_197587767493852_8819707598509965312_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day44">
              <Day
                num={44}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/f1b7a215139cc2d35d48665e64c09109/5B45A393/t51.2885-15/e35/27879352_1508372845942083_1754498834815254528_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day45">
              <Day
                num={45}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/6e283c53af932b70efdbbf3d96292b2f/5B3FB5EA/t51.2885-15/e35/27880770_528523014186747_3615581517918502912_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day46">
              <Day
                num={46}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/80b43562e81c92b088fe6569e01fd995/5B31D7A7/t51.2885-15/e35/27892063_362847037527910_2388315731440697344_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day47">
              <Day
                num={47}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/854ebc0c0387fceac47e609822e1b3aa/5B4BC2BE/t51.2885-15/e35/28151355_1054939004649071_8725615490803695616_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day48">
              <Day
                num={48}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/aa2f55b9b2bbcd375c3b7443f7290cfe/5B4D312D/t51.2885-15/e35/28427207_165312464262549_5112153418986684416_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day49">
              <Day
                num={49}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/5b45bf52b61d3c4c6a239b20f6bb023b/5B4D7244/t51.2885-15/e35/28153651_827951157412206_5201516776289992704_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day50">
              <Day
                num={50}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/7637a02c42c0b145d7773edd7a689f74/5B424CF5/t51.2885-15/e35/28154102_1421996934578683_3890810624338296832_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
            <article id="a-day51">
              <Day
                num={51}
                text={[
                  'La rédaction de cet article n\'est pas encore terminée mais ça viendra dans quelques jours : suivez la page facebook de teksinseoul pour rester au courant de la sortie de contenu (www.facebook.com/teksinseoul).',
                  'MAIS, les photos sont déjà ici, jettez un oeil!'


                ]}
                insta="https://scontent-hkg3-1.cdninstagram.com/vp/76c30a03452bcb7f809eb200b0e94790/5B3D32E3/t51.2885-15/s750x750/sh0.08/e35/28154108_1988387041414509_536262671616442368_n.jpg"
                handleOpen={this.handleOpen}
              />
            </article>
          </section>
        </div>
      </div>
    );
  }
}

Roadtrip.WrappedComponent.displayName = 'Home';
Roadtrip.WrappedComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  selectedPictures: PropTypes.string.isRequired,
  modalState: PropTypes.bool.isRequired
};
Roadtrip.WrappedComponent.defaultProps = {
  login: null
};
