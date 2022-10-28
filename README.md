# 42API 기한 만료로 인해 더이상 동작하지 않습니다
## Requirements
> OS : linux    
> need
> - 42API key, secret ( Oauth )
> - docker, docker-compose  
> - port: bind 8080(front), 5432(postgres in docker), 5000(nestjs in docker)
> - config /backend/.env -> REDIRECT_URI='your_oauth_redirect_uri'  
> - config /frontend/.env -> ..VITE_URL= blabla.. &redirect_uri=your_oauth_redirect_uri&...blabla



### Execution
**goto clone foder**
```
    git clone https://github.com/PracticeofEno/FT_Transcendence.git
    docker-compose up
```

42API

