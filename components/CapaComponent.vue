<template>
  <div class="capa">
    
    <div class="conteudo">
        <div class="container">
            <div class="row ">
                <div class="col-6">
                    <h1 class="text-white text-capa">
                        <span class="fw-bold">Monokai</span> Games
                    </h1>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "CapaComponent"
}
</script>

<style >
    .capa{
        height: 400px;
        position: relative;
        background-image: url("../assets/img/capa.jpg");
        
        
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
       
    }
    .conteudo{
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
    }
    .text-capa{
        margin-top: 10vh ;
    }
    h1 {
      color: #fff;
      font-size: 64px;
      font-weight: 200;
      margin-bottom: 8px;    
    }

</style>