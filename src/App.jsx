import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'jcnapoles',
    name: 'Cesar Nápoles',
    isFollowing: true
  },
  {
    userName: 'suneidis',
    name: 'Suneidis',
    isFollowing: false
  },
  {
    userName: 'erasmogarciaglz',
    name: 'Erasmo García Glez',
    isFollowing: false
  },
  {
    userName: 'YoanniFrometa',
    name: 'Yoanni Navarro Frometa',
    isFollowing: false
  }
];

export function App() {  
  return(
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) =>  (
            <TwitterFollowCard 
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}
            >
              {name}
               {/* Esto es un comentario */}
            </TwitterFollowCard>
            
            )
        )
         
      }      
    </section>
  
  )
}

