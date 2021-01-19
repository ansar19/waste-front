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
//           name
//           body
//         }
//       }
//     }`

export default {
  name: 'NewUser',
  data() {
    return {
      posts:[],
      newPost:{
        title: '',
        body: ''
      },
      // getPostByIdQuery: `
      //   query {
      //     post(id: 1) {
      //       id
      //       title
      //       body
      //     }
      //   }`,
      // updatePostMutation: `
      //   mutation ($id: ID!, $input: UpdatePostInput!) {
      //     updatePost(id: $id, input: $input) {
      //       id
      //       title
      //       body
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
  //   async createPost () {
  //     return await this.$apollo.mutate({
  //       mutation: ADD_POST_MUTATION,
  //       variables: {
  //         input: {
  //           title: this.newPost.title,
  //           body: this.newPost.body,
  //         }
  //       },
  //       update: (store, { data: { createPost } }) => {
  //         // read data from cache for this query
  //         const data = store.readQuery({query: ALL_POSTS_QUERY})
  //         console.log("Data.posts", data.posts.data)
  //         // add new post from the mutation to existing posts
  //         data.posts.data.push(createPost)
  //         // write data back to the cache
  //         store.writeQuery({query: ALL_POSTS_QUERY, data})
  //       }
  //     }).then(response => {
  //       this.$router.replace('/')
  //       console.log(response)
  //       console.log(this.id)
  //     })
  //   },
  //   async getPost() {
  //     let {data} = await this.$apollo.query({
  //       query: gql`${this.getPostByIdQuery}`,
  //       variables:{
  //         id:this.$route.query.edit
  //       }
  //     })
  //     console.log("Data:", data);
  //     this.newPost=data.post
  //     console.log(data.post)
  //   },
  //   updatePost(){
  //     this.$apollo.mutate({
  //       mutation: gql`${this.updatePostMutation}`,
  //       variables: {
  //         id: this.$route.query.edit,
  //         input: {
  //           title: this.newPost.title,
  //           body: this.newPost.body
  //         }
  //       }
  //     });
  //     this.$router.push('/')
  //   }
  // },
  // created(){
  //   if(this.editMode) {
  //     this.getPost();
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
