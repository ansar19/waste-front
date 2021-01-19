<template>
    <div class="new">
      <form>
        <div class="form-group">
          <label >Username:</label>
          <input type="text" class="form-control" placeholder="Ex: John">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label >Role:</label>
          <input type="text" class="form-control" placeholder="Ex: Administration">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</template>

<script>
// import gql from "graphql-tag"
// export const ADD_USER_MUTATION = gql`
//     mutation ($input: CreateUserInput!) {
//         createUser(input: $input) {
//             id
//             title
//             body
//         }
//     }`
// const ALL_USERS_QUERY = gql`
//     query {
//       users {
//         data {
//           id
//           username
//           body
//         }
//       }
//     }`

export default {
  name: 'NewUser',
  data() {
    return {
      users:[],
      newUser:{
        username: '',
        body: ''
      },
      // getUserByIdQuery: `
      //   query {
      //     user(id: 1) {
      //       id
      //       username
      //       createdAt
      //     }
      //   }`,
      // updateUserMutation: `
      //   mutation ($id: ID!, $input: UpdateUserInput!) {
      //     updateUser(id: $id, input: $input) {
      //       id
      //       username
      //       createdAt
      //     }
      //   }`
    }
  },
  // computed:{
  //   editMode(){
  //     return !!this.$route.query.edit
  //   }
  // },
  // methods: {
  //   async createUser() {
  //     return await this.$apollo.mutate({
  //       mutation: ADD_USER_MUTATION,
  //       variables: {
  //         input: {
  //           title: this.newUser.title,
  //           body: this.newUser.body,
  //         }
  //       },
  //       update: (store, { data: { createUser } }) => {
  //         // read data from cache for this query
  //         const data = store.readQuery({query: ALL_USERS_QUERY})
  //         console.log("Data.users", data.users.data)
  //         // add new post from the mutation to existing posts
  //         data.users.data.push(createUser)
  //         // write data back to the cache
  //         store.writeQuery({query: ALL_USERS_QUERY, data})
  //       }
  //     }).then(response => {
  //       this.$router.replace('/')
  //       console.log(response)
  //       console.log(this.id)
  //     })
  //   },
  //   async getUser() {
  //     let {data} = await this.$apollo.query({
  //       query: gql`${this.getUserByIdQuery}`,
  //       variables:{
  //         id:this.$route.query.edit
  //       }
  //     })
  //     console.log("Data:", data);
  //     this.newUser=data.user
  //     console.log(data.user)
  //   },
  //   updateUser(){
  //     this.$apollo.mutate({
  //       mutation: gql`${this.updateUserMutation}`,
  //       variables: {
  //         id: this.$route.query.edit,
  //         input: {
  //           title: this.newUser.title,
  //           body: this.newUser.body
  //         }
  //       }
  //     });
  //     this.$router.push('/')
  //   }
  // },
  // created(){
  //   if(this.editMode) {
  //     this.getUser();
  //   }
  // }
}
</script>

<style scoped>
.new{
  margin: auto;
  width: 50%;
}
</style>
