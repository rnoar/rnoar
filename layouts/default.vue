<script>
  import hello from '../content/main/wellcome.md'
 
  export default {
    data() {
      return {
        isActive: false,
        showNavbar: true
      }
    },
    computed: {
      hello() {
        return hello
      }
    }
  }
</script>

<template>
  <div>
    <nav class="navbar container">
      <div class="navbar-brand">
        <img src="/logo.png" width="300">        
      </div>
      <div class="navbar-item">
        <h1 class="title is-6">Воронежское региональное отделение <br>Общероссийской общественной организации <br>«Российское научное общество анализа риска» <br>(ВРО «РНОАР»)</h1>
      </div>
    </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a :aria-expanded="isActive" :class="{ 'is-active': isActive }" role="button" class="navbar-burger" aria-label="menu" data-target="collapse" @click="isActive = !isActive" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="collapse" :class="{ 'is-active': isActive }" class="navbar-menu is-paddingless" >
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Главная
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                О научном обществе
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/basic_info">
                  Общая информация
                </a>
                <a class="navbar-item" href="/history">
                  История РНОАР
                </a>
                <a class="navbar-item" href="/regional_office">
                  Региональное отделение
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Деятельность
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/scientific">
                  Научная деятельность
                </a>
                <a class="navbar-item" href="/events">
                  Мероприятия с участием ВРО «РНОАР»
                </a>
                <a class="navbar-item" href="/interaction">
                  Взаимодейстие ВРО «РНОАР» в регионе
                </a>
                <a class="navbar-item" href="/analytics">
                  Аналитика, практические работы
                </a>
                <a class="navbar-item" href="/reports">
                  Доклады, отчёты, обзоры
                </a>
                <a class="navbar-item" href="/articles">
                  Монографии, сборники статей, статьи
                </a>
                <a class="navbar-item" href="/npa">
                  НПА для реализации риск-ориентированного подхода
                </a>
                <a class="navbar-item" href="/risk_based_approach">
                  Реализация риск-ориентированного подхода в регионе
                </a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                Новости
              </a>
              <div class="navbar-dropdown">
                <a class="navbar-item" href="/news">
                  Новости Общероссийской общественной организации «Российское научное общество анализа риска»
                </a>
              </div>
            </div>
            <a class="navbar-item" href="/docs">
              Документы
            </a>
            <a class="navbar-item" href="/contact">
              Контакты
            </a>
            <a class="navbar-item" href="/english">
              English
            </a>
          </div>

        </div>
      </div>
    </nav>
    <section class="container">
			<div class="columns">
				<div class="column is-8">
					<nuxt/>
				</div>
        <div class="column">
					<div class="box">
            <img src="/photo.png">
            <div>
              <div v-html="hello"></div>
            </div>
          </div>          
				</div>
			</div>
		</section>
  </div>  
</template>