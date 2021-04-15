<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>cheese1</li>
      <li>cheese2</li>
      <li>cheese3</li>
      <li>cheese4</li>
      <li>cheese5</li>
      <li>cheese6</li>
      <li>cheese7</li>
      <li>cheese8</li>
      <li>cheese9</li>
      <li>cheese10</li>
      <li>cheese11</li>
      <li>cheese12</li>
      <li>cheese13</li>
      <li>cheese14</li>
      <li>cheese15</li>
      <li>cheese16</li>
      <li>cheese17</li>
      <li>cheese18</li>
      <li>cheese19</li>
      <li>cheese20</li>
      <li>cheese21</li>
      <li>cheese22</li>
      <li>cheese23</li>
      <li>cheese24</li>
      <li>cheese25</li>
      <li>cheese26</li>
      <li>cheese27</li>
      <li>cheese28</li>
      <li>cheese29</li>
      <li>cheese30</li>
      <li>cheese31</li>
      <li>cheese32</li>
      <li>cheese33</li>
      <li>cheese34</li>
      <li>cheese35</li>
      <li>cheese36</li>
      <li>cheese37</li>
      <li>cheese38</li>
      <li>cheese39</li>
      <li>cheese40</li>
      <li>cheese41</li>
      <li>cheese42</li>
      <li>cheese43</li>
      <li>cheese44</li>
      <li>cheese45</li>
      <li>cheese46</li>
      <li>cheese47</li>
      <li>cheese48</li>
      <li>cheese49</li>
      <li>cheese50</li>
      <li>cheese51</li>
      <li>cheese52</li>
      <li>cheese53</li>
      <li>cheese54</li>
      <li>cheese55</li>
      <li>cheese56</li>
      <li>cheese57</li>
      <li>cheese58</li>
      <li>cheese59</li>
      <li>cheese60</li>
      <li>cheese61</li>
      <li>cheese62</li>
      <li>cheese63</li>
      <li>cheese64</li>
      <li>cheese65</li>
      <li>cheese66</li>
      <li>cheese67</li>
      <li>cheese68</li>
      <li>cheese69</li>
      <li>cheese70</li>
      <li>cheese71</li>
      <li>cheese72</li>
      <li>cheese73</li>
      <li>cheese74</li>
      <li>cheese75</li>
      <li>cheese76</li>
      <li>cheese77</li>
      <li>cheese78</li>
      <li>cheese79</li>
      <li>cheese80</li>
      <li>cheese81</li>
      <li>cheese82</li>
      <li>cheese83</li>
      <li>cheese84</li>
      <li>cheese85</li>
      <li>cheese86</li>
      <li>cheese87</li>
      <li>cheese88</li>
      <li>cheese89</li>
      <li>cheese90</li>
      <li>cheese91</li>
      <li>cheese92</li>
      <li>cheese93</li>
      <li>cheese94</li>
      <li>cheese95</li>
      <li>cheese96</li>
      <li>cheese97</li>
      <li>cheese98</li>
      <li>cheese99</li>
      <li>cheese100</li>
    </ul>

  </div>
</template>

<script>
  import BSscroll from '@better-scroll/core';
  import Pullup from '@better-scroll/pull-up'

  export default {
    name: "Cart",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      BSscroll.use(Pullup)
      console.log(BSscroll);
      this.scroll = new BSscroll(this.$refs.aaa,{
        probeType: 3,
        pullUpLoad: true

      })

      console.log(this.scroll);
      this.scroll.on('scroll',(position) => {
        console.log(position);
      })

      this.scroll.on('pullingUp',()=>{
        console.log("上拉加载更多-------------");
      })

    }
  }
</script>

<style scoped>


  .wrapper {
    height: 150px;
    background-color: cornflowerblue;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
