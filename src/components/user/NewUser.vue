<template>
    <div class="container">
      <form>
        <div class="form-group">
          <label>Имя:</label>
          <input type="text" class="form-control" placeholder="Иванов Иван">
        </div>
        <div class="form-group">
          <label>Должность:</label>
          <input type="text" class="form-control" placeholder="Директор">
        </div>
        <button type="submit" class="btn btn-primary">Добавить</button>
      </form>
    </div>
</template>

<script>
export default {
  name: 'NewUser',
  data() {
    return {
      newUser:{
        title: '',
        body: ''
      },
    }
  },
}
</script>

<style scoped>
.container{
  margin: auto;
  width: 50%;
}
</style>
