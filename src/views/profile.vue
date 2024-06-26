<template>
  <div v-if="user" class="min-h-screenflex mt-10 py-12 px-4 sm:px-6 lg:px-8">
    <div class="profile-section ">
      <div class="text-center mb-4">
        <CAvatar v-if="!user.profilePicture" size="xl" class="w-32 h-32 rounded-full mx-auto" color="warning">
          {{ initial }}
        </CAvatar>
        <img v-else class="w-32 h-32 rounded-full mx-auto" :src="user.profilePicture" alt="Profile Picture">
        <h2 class="text-2xl font-bold mt-4">@{{ user.displayName }} <CBadge v-if="user.isAdmin" color="danger">Admin</CBadge></h2>
        <p class="text-gray-600">{{ user.email }}</p>
        <p class="text-gray-400">Member since: {{ user.creationDate }}</p>
      </div>
    </div>

    <div class="content-section mt-10">
  
      <h1 class="quizzes-title text-2xl font-bold mb-4">📝 Taken Quizzes:</h1>
      <fieldset v-if="user.quizzes && user.quizzes.length > 0" class="border border-gray-300 rounded-lg p-4">
        <div class="realsection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ScoredQuiz v-for="quiz in user.quizzes" :key="quiz.id" class="mb-4" :quiz="quiz" />
        </div>
      </fieldset>
      <fieldset v-else class="border border-gray-300 rounded-lg p-4 text-gray-500">
        No quizzes taken yet.
      </fieldset>

      <div v-if="user.isAdmin">
        <h1 class="quizzes-title mt-10 text-2xl font-bold mb-4">📝 Created Quizzes:</h1>
        <fieldset v-if="user.created && user.created.length > 0 && user.isAdmin" class="border border-gray-300 rounded-lg p-4 mb-8">
          <div class="realsection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <router-link v-for="id in user.created" :key="id" :to="'/quizdetails/'+id">
              <QuizPreview class="mb-4" :quiz="id" :isAdmin="isVisitorAdmin" />
            </router-link>
          </div>
        </fieldset>
        <fieldset v-else class="border border-gray-300 rounded-lg p-4 mb-8">
          <p class="text-gray-500">No quizzes created yet.</p>
        </fieldset>
      </div>

    </div>
  </div>
</template>

<script>
import QuizPreview from '@/components/QuizPreview.vue';
import ScoredQuiz from '@/components/ScoredQuiz.vue';
import { getUser, getUserById } from '@/firebase/Authentification/getUser';
import { CAvatar, CBadge } from '@coreui/vue';

export default {
  name: 'Profile',
  components: { ScoredQuiz, QuizPreview, CAvatar, CBadge },
  data() {
    return {
      user: null,
      initial: '',
      isVisitorAdmin: false,
    };
  },
  async created() {
    try {
      const userId = this.$route.params.id;
      this.user = await getUserById(userId);
      if (this.user) {
        this.initial = this.user.displayName.charAt(0).toUpperCase();
        this.user.creationDate = this.user.createdAt.toDate().toLocaleDateString();
      } else {
        console.error('User not found.');
      }
    } catch (error) {
      console.log('Error fetching user:');
    }
    
    const curUser = await getUserById(getUser().uid);
    if ( curUser.isAdmin ){
      this.isVisitorAdmin = true;
    }
  },
  watch: {
    $route() {
      window.location.reload();
    }
  }
};
</script>

<style scoped>
.profile-section {
  width: 400px;
  padding: 20px;
  top: 50%;
  left: 0;
  margin-top: 100px;
  transform: translateY(-50%);
  background-color: #fff; 
}

.content-section {
  margin-left: 420px;
}

.realsection {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
}

.quizzes-section {
  background-color: #fff; 
  padding: 20px;
  border-radius: 8px;
}

.quizzes-title {
  color: #7600bc; 
  margin-bottom: 20px;
}
.profile-section {
  width: 320px; 
  height: 100%; 
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}


.content-section {
  flex: 1; 
  margin-left: 340px; 
}

@media screen and (max-width: 768px) {
  .profile-section {
    width: 100%; 
    max-width: 400px; 
    margin: 0 auto; 
    margin-top: 30px;
    position: relative; 
    top: auto;
    left: auto;
    transform: none;
  }

  .content-section {
    margin-left: 0; 
  }
}

</style>