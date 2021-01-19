<template>
  <div class="new">
    <form>
      <div class="form-group">
        <label >Username:</label>
        <input type="text" class="form-control" v-model="username" placeholder="Ex: John">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label >Role:</label>
        <input type="text" class="form-control" v-model="role" placeholder="Ex: Administration">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "EditUserDetails",
  data(){
    return{
      username: 'John',
      role: 'Administration'
    }
  }
}
</script>

<style scoped>
.new{
  margin: auto;
  width: 50%;
}
</style>
