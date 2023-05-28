<script setup lang="ts">
import DropDownTab from './DropDownTab.vue';
import IconFilter from './icons/IconFilter.vue';
</script>

<template>
    <!-- Slide out Filter -->
    <div class="filter">
        <p>400 ITEMS</p>
        <div class="filter-btn">
            <IconFilter />
            <p>Filter</p>
        </div>
    </div>
    
    <div class="filters-container">
        <div class="filter-nav">
            <h3>HIDE FILTERS</h3>
            <h3 class="pink">RESET ALL</h3>
        </div>
        <h1>SEARCH</h1>
        <div class="filter-options">
            <label for="filter">Sort By</label>
            <select id="filter" name="filter">
                <option value="all">All</option>
                <option value="name">Name</option>
                <option value="date">Date</option>
                <option value="popular">Popular</option>
            </select>
        </div>
        <div class="filter-options">
            <label for="filter">Sort Direction</label>
            <select id="filter" name="filter">
                <option value="all">All</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div>
        <div class="show-filters">
            <DropDownTab class=".dropdown"> <h1>Category</h1></DropDownTab>
            <DropDownTab> <h1>Skill Level</h1></DropDownTab>
            <DropDownTab> <h1>Material</h1></DropDownTab>
        </div>
        <button>
            <p class = "button">APPLY FILTERS</p>
        </button>
    </div>

</template>

<style scoped lang="scss">
.filters-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25em;
    background-color: $clr-primary;
    outline: black 1px solid;
    padding: 2em;
    border-radius: 20px;

    h1{
        color: $clr-secondary;
    }
}
.filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $clr-secondary;
    color: $clr-primary; //remove this
    margin-top: 1em;
    width: 100%; //remove this
    .filter-btn{
        display: flex;
        align-items: center;
        gap: 0.5em;
        cursor: pointer;
        text-transform: uppercase;
        background-color: rgba($color: #FFFAE0, $alpha: 0.2);
        border-radius: 10px;
        padding-inline: 15px;
    }
}
.filter-nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3:hover{
        cursor: pointer;
    }
    .pink{
        color: $clr-accent-1;
    }
}
.filter-options{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 0 0.5em 0;

    select{
        background-color: $clr-secondary;
        color: $clr-primary;
        border: none;
        padding: 0.25em;
        width: 120px;
        border-radius: 8px;
        cursor: pointer;
    }
}
button {
    background-color: $clr-accent-1;
    border-radius: 20px;
    border: none;
    // width: 200px;
    margin: 50px 50px 0 50px;
    color: $clr-primary;
    cursor: pointer;
}
</style>