<template>
  <div>
    <CapaComponent></CapaComponent>
    <div class="container">
      <div class="row">
      <div class="col-12">
        <form @submit.prevent="pesquisarJogo()">
          <div class="row mt-4">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" v-model="formPesquisa.titulo" placeholder="Pesquisar jogo">
                <label for="floatingInput">Pesquisar jogo..</label>
                
              </div>
              
            </div>
            <div class="col-6 col-lg-3 col-xl-2">
              <div class="form-floating mb-1">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="formPesquisa.plataforma">
                  <option selected value="">Todos</option>
                  <option value="PC (Windows)">PC (Windows)</option>
                  <option value="Web Browser">Web Browser</option>
                  <option value=""></option>
                </select>
                <label for="floatingSelect">Selecione o plataforma</label>
              </div>
            </div>
            <div class="col-6 col-lg-3 col-xl-2">
              <div class="form-floating mb-1">
                <select class="form-select" v-model="formPesquisa.genero" id="floatingSelect" aria-label="Floating label select example">
                  <option selected value="">Todos</option>
                  <option value="MMORPG">MMORPG</option>
                  <option value="Action RPG">Action RPG</option>
                  <option value="ARPG">ARPG</option>
                  <option value="Battle Royale">Battle Royale</option>
                  <option value="Card Game">Card Game</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Fighting">Fighting</option>
                  <option value="MMO">MMO</option>
                  <option value="MMOARPG">MMOARPG</option>
                  <option value="MMOFPS">MMOFPS</option>
                  <option value="MMORPG">MMORPG</option>
                  <option value="MOBA">MOBA</option>
                  <option value="Racing">Racing</option>
                  <option value="Shooter">Shooter</option>
                  <option value="Social">Social</option>
                  <option value="Sports">Sports</option>
                  <option value="Strategy">Strategy</option>
                </select>
                <label for="floatingSelect">Selecione a gênero</label>
              </div>
            </div>
            <div class="col-6 col-xl-4">
              <button type="submit" class="btn btn-purple mt-3 mb-5 ">Pesquisar</button>
            </div>
            
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4" v-for="game in dados.data" :key="game.id">
        <div class="card text-white bg-dark mb-4" >
        <img :src="game.thumbnail" class="card-img-top" alt="Game">
        <div class="card-body">
            <h5 class="card-title">{{game.title}}</h5>
            <div class="descricao">
              <p class="card-text">{{game.short_description}}</p>
              <ul>
                <li>Gênero: {{game.genre}}</li>
                <li>Plataforma: {{game.platform}}</li>
              </ul>
            </div>
            <a href="#" class="btn btn-outline-purple" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="showGame(game)">Mais informações</a>
        </div>
    </div>
      </div>
    </div>
    <div class="row justify-content-center">
     
      <div class="col-12">
        <nav aria-label="Page navigation example">
        <ul class="pagination pagination justify-content-center ">
          <li class="page-item " v-for="(link, index) in dados.links" :key="index">
            <a :class="link.active ? `page-link bg-dark border-purple text-white page-active` : `page-link bg-dark border-purple text-white`"   v-html="link.label" @click="buscarDados(link)"></a>
          </li>
          
        </ul>
      </nav>
      </div>
    </div>
      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg ">
          <div class="modal-content bg-dark text-white">
            
            <div class="modal-body">
              <div class="row">
                <div class="col-12 col-xxl-6 mb-3">
                  <img :src="game.thumbnail" class="img-fluid" alt="">
                </div>
                <div class="col">
                  <h2 class="mb-3">{{game.title}}</h2>
                  <ul>
                    <li>Gênero: {{game.genre}}</li>
                    <li>Plataforma: {{game.platform}}</li>
                    <li>Desenvolvedora: {{game.developer}}</li>
                    <li>Data: {{game.release_date}}</li>
                    <li>Link para jogar: <a :href="game.game_url" target="_blank">{{game.game_url}}</a></li>
                  </ul>
                  <p>{{game.short_description}}</p>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CapaComponent from '~/components/CapaComponent.vue';


export default {
    name: "IndexPage",
    components: { CapaComponent},
    data: () => ({
      game: "",
      formPesquisa: {
        titulo: "",
        plataforma:"",
        genero: ""
      }
    }),
    methods: {
      showGame(game){
        this.game = game
      },
      async pesquisarJogo(){
        const dadosFiltrados = await this.$axios.$post("/game-filtro",this.formPesquisa)
        
        this.dados = dadosFiltrados
      },
      async buscarDados(link){
        if(link.url != null){
          this.$nuxt.$loading.start()
          const dadosPaginados = await this.$axios.$post(link.url)
          
          this.$nuxt.$loading.finish()
          this.dados = dadosPaginados
        }
      }
    },
    async asyncData({$axios}){
      const dados = await $axios.$post("/game-filtro")

      return {dados}
    }
   

    
}
</script>
<style scoped>
  .descricao{
        color: #c9c9c9;
    }
    .btn-outline-purple { 
        border: 1px solid #72019b;
        color:white;
    }
    .btn-purple { 
        background-color: #72019b;
        color:white;
    }
    .btn-purple:focus{
      border: 1px solid #72019b;
    }
    .btn-purple:hover{
      background-color: #630785;
      border: 1px solid #630785;
    }

    .btn-outline-purple:hover{
        background-color: #72019b;

    }
    .page-link{
      cursor:pointer;
    }
    .border-purple{
      border: 1px solid #72019b;
    }
    .page-link:hover{
      color:white !important;
      border: 1px solid #72019b !important;
      background: #72019b !important;
    }
    .page-active{
      color:white !important;
      border: 1px solid #72019b !important;
      background: #72019b !important;
    }
</style>
