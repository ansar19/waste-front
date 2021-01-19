<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label>Имя:</label>
        <input type="text" class="form-control" v-model="username" placeholder="Иван Иванов">
      </div>
      <div class="form-group">
        <label>Должность:</label>
        <input type="text" class="form-control" v-model="role" placeholder="Директор">
      </div>
      <button type="submit" class="btn btn-success">Сохранить</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "EditUser",
  data(){
    return{
      username: 'Иван Иванов',
      role: 'Директор'
    }
  }
}
</script>

<style scoped>
.container{
  margin: auto;
  width: 50%;
}
</style>
