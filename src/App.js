import React, { useState, useEffect } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import SearchAndFilter from './components/SearchAndFilter';
import './App.css';

const INITIAL_MOVIES = [
  { 
    id: 1, 
    title: 'Звёздные войны: Эпизод 3 – Месть ситхов', 
    year: '2005',
    posterUrl: 'https://kinopoisk-ru.clstorage.net/1G46In268/17e6beABxq4/9ZdrcRnIMgZ1CjcBP98kag0NbiCxjZKzQMk5IAhz_UG0gx_x9_ztbpWDw-fdwRO1l90tQ57BEOjv27gZRkGJqGESqqbLWjGSIpkwVSpfZHjfjm_kNl-GYkeN7TefuDFLuAlDeHg25WWN0xM0G9bEowfNu1VOAxV4Psci3VmXUz80Ei_wlpi6AjTbOkX4XGyv2gDrLecOEvoTTzDiQTG3Bn1LSXj6NWlthx_WOYPdQytJBTvWzEtL9HCD5w4en5C9N59nvNTSc0H023uH9pMhbZcGJO3kSRZzXw427QD8fM-wzI2w9v3h7ISenjyAEITrR031FEfFhXY9gm5IkplYfDxf6jzZ0fWPOFCzg3VWbiFVAuspY4zSvBeJ-uvDMfiNeAyB8fYwYSqAWF_4C1_AYEfI9RMBiUi_98AswVkRU3l2EOc0VJLwhXpaN8q5n-yplA3uKKqG23oSiz4hyr79jnMLyrBweGrpR9QXOkzXyqMNS7aUSw1HfDGGqwiaHt5xu1Lq_xwRu8s8HfoH_9xmKBNFK2zpSJj3F8ZzoY4z9w4zD072srRk5sJV0HiBFY5gxg_9ngKMj3K7C6EJl9yZdzNSqbCYWvXNMJHxynnS5OAdTqKsI8cds9IDvuAOsr0PtURBN3HyJ2VKk517BlcHqYFE-ZXCDYr__8puiZtUnnG-lm2x0RH3CTBas4TyFWTp3Y-v4CNMHnbQjnurSrR_h7FHwb55vizsx90UPcRQg6BGQvmUQ0OKvXsDoIDbnlJ8cR_j_5wXtYUynf9KfJOv7t5HpWMvSNIy2wu-6kN1sskygYT_sP4p5kgVnrJGGoUjjQo8Gk5Dxb42hqFBkZbQcz7ZYfQR3_ADNVT6jLSTra0WCqThoQnfMBLNfiAKvvIFc0lHePB3IWQMWJT9zt_GoEfIud2KSUW2_k6vh1jXmnw7WiA23Ni4TPhR8EE1n6agnQ6iZe5H1njTArBhB3-7wnIAR7vyOSUugBSXcUXURG3Ehbufg8JCd3_DKckRkBf0eRPjuN7fckc6ErwC_9Tv7VOGYqdgQZY_GsFyJY55eoh9CMi_P7znL00VXTVIF4ZoxkB024NAwzr2iSXMmp8btzbWZjgRX7cG81R5AD-To2nQzCQoqEjf_dbFuqlK-vgNuALMezY2pGQFU1e3yl1GpAZJ9BQBAIZ5uMBswFXWHPm006hwVZE_TjpQe0j0mm1sXEVk6eKA1v7QA7sjyr1yyzQJhT0_9mZmxhqV_4YVx6TFwjEfiEvAtDXNbEGfGpt1OJKg_B5Sf8b_kLgNf9clb9SA5OHqxZk8mIexqM_7uMXyAI3_fPXqrkwQ1_KN1UYpgEA8kYTChbTwgCiEFhxZMP0eabkVWHQK-Nr_z_EXrKDSCuUoaoWe_pcKf2kDfbTHtIFKt_Z17-RCnNK9CR-K7snDfB1DyMR-vcwojhOV1jd1keB92Zr3BLfYtI0_XSiqHA_tr2wJEPhXx_0qBzvzBbyDTzI1N-UrTpWX_80fB6rJwP3WC82OMbUIIM8Yn1n7P9Rm8JBWP8M63P3ANJcn7lvN7qHsStt7nkA-YIn0swH0wwZwNHAoZkKXGnxEVYVoBwF9nkbCALaySSGG1tfadDGWpveTm_dNN521x36U4CiSQ20j58-atRgAve2NsftCu4UEfjI-paZH3N51gJhM4cGB-lKDAw8994shSFhXl7g1mO703th3DjUYNQV03mav3E6tpOOBnXhTDzArQjY1gnHNhv91sOctRZycMoyfTSVJjTlTSwDMvnfJp0STERFx-dgq9V_aM8F10fgBvVQvL5UP56AowhH-mE36bkJzeg6yjIxzPPrsbs4d27eCHwsrz4Hy2UlEjTW5hOCB1xmcdP9fbzmVUjPBepL3SzabpKxSRqKlaIFZ8tDHumFHM73DuQoIvb42bmpAH5s8xZHGowYPuB6HyQTwdcOkjduQFL02kOKz0J96T_ATssf8Gmlml40vLetBWnTfjfYozzp6y3vMznH4t2Thyp6evMxVz-oMwzyayMRIvHDOYw_RFle7M1wgfBZYsgWyV_REd91vqdONIyYuR1Kw2oA3oMZ7_kX-Cg33_DQoYosa1T_L2YSiyEu0FQZARLD-Au-EWBBet_OYaDgWkrTK_d3_Dbze624UAyHkYQjXe5hF_SrLNPvHvcLAun_6peKNX1w4zlAMIA1L85RPAU_-8wshAJVR17N8mS9zmBb4AjuR9Yf23eEuX8IhbiLOE7oawrDojj92QfyIjzm8_-eswhdTu8EXwyqHDznaz0AKNvbJr4xYnJu3cN_vuNfdvYv0GL9Mf1gjIlpKZKAnhNHzUw4x5sN-tIczg0FzefDm4wMb2nPFlgzrxUew1kfHQzfywy6F1xgaOP2cYXYc2fdCeFlzB3WSIyicymJhI0mR8tMIOGMHMvXCtUkB-_4-LuRC0pe8zlHNpooJ-RQMTAM498wvSdbR172_UOmzFlg9ArNfNMLy2K8tlsKsJOIIHvRdC7rrCXc2STAIybWwdOhkBZLa_AvQjOsAAHGaCMoL9_oMJ4ESlBIx-JPpOF7Ss8x0kTDNfpupaVpFrazriBb110Bz40i0_kNyA8k9vHekJE1Q1LFE0AahTwWxl0EARfW_CiWIW15YeL8YYPPfV3hGO900y_caZmefS-TlIorV9RoIcmBK_TtDe0kAvz295q7P09I6CV0HYEnBMxFMhM11N8ChSJ8eUrm80-A3FhcwjrySeMs3nKcn1Q1tIW_AGnzZQXrgx32_B70AxfN_eWKjRxSccUtahiXJiP1RRwiPsHYNYw5fEdiz_18ufVWXekX93f9IuZ-hpR0EZCMjxxK03c_268j6Mg22y41__7Rs7kTUlX0G0Q8ozEw10kuBDbVwjqFEERacfHZQrveWF3OP_JixwrGbJiSUgi-j4Mla9ZvOt6bF9HUCOUhCufYwLqeKVdK6CRAArYlK_Z_BhIp9MQ',
    description: 'Республика медленно погружается во тьму. Лишь рыцари-джедаи, защитники мира и справедливости, могут противостоять злу, которое вскоре поглотит галактику. Но настоящая битва идёт в душе у молодого рыцаря-джедая Энакина, который разрывается между долгом джедая и любовью к своей жене.'
  },
  { 
    id: 2, 
    title: 'Начало', 
    year: '2010',
    posterUrl: 'https://kinopoisk-ru.clstorage.net/1G46In268/17e6beABxq4/9ZdrcRnIMgZ1CjcBP98kag0NbiCxjZKzQMk5IAhz_UG0gx_x9_ztbpWCg2VeANC0l9-415yBkqjt26wMRgHJqGDT_ybdm_AHoo2k1eoL83nLmPukt5-GYkeN7TefuDFLuAlDeHg25WWN0xM0G9bEowfNu1VOAxV4Psci3VmXUz80Ei_wlpi6AjTbOkX4XGyv2gDrLecOEvoTTzDiQTG3Bn1LSXj6NWlthx_WOYPdQytJBTvWzEtL9HCD5w4en5C9N59nvNTSc0H023uH9pMhbZcGJO3kSRZzXw427QD8fM-wzI2w9v3h7ISenjyAEITrR031FEfFhXY9gm5IkplYfDxf6jzZ0fWPOFCzg3VWbiFVAuspY4zSvBeJ-uvDMfiNeAyB8fYwYSqAWF_4C1_AYEfI9RMBiUi_98AswVkRU3l2EOc0VJLwhXpaN8q5n-yplA3uKKqG23oSiz4hyr79jnMLyrBweGrpR9QXOkzXyqMNS7aUSw1HfDGGqwiaHt5xu1Lq_xwRu8s8HfoH_9xmKBNFK2zpSJj3F8ZzoY4z9w4zD072srRk5sJV0HiBFY5gxg_9ngKMj3K7C6EJl9yZdzNSqbCYWvXNMJHxynnS5OAdTqKsI8cds9IDvuAOsr0PtURBN3HyJ2VKk517BlcHqYFE-ZXCDYr__8puiZtUnnG-lm2x0RH3CTBas4TyFWTp3Y-v4CNMHnbQjnurSrR_h7FHwb55vizsx90UPcRQg6BGQvmUQ0OKvXsDoIDbnlJ8cR_j_5wXtYUynf9KfJOv7t5HpWMvSNIy2wu-6kN1sskygYT_sP4p5kgVnrJGGoUjjQo8Gk5Dxb42hqFBkZbQcz7ZYfQR3_ADNVT6jLSTra0WCqThoQnfMBLNfiAKvvIFc0lHePB3IWQMWJT9zt_GoEfIud2KSUW2_k6vh1jXmnw7WiA23Ni4TPhR8EE1n6agnQ6iZe5H1njTArBhB3-7wnIAR7vyOSUugBSXcUXURG3Ehbufg8JCd3_DKckRkBf0eRPjuN7fckc6ErwC_9Tv7VOGYqdgQZY_GsFyJY55eoh9CMi_P7znL00VXTVIF4ZoxkB024NAwzr2iSXMmp8btzbWZjgRX7cG81R5AD-To2nQzCQoqEjf_dbFuqlK-vgNuALMezY2pGQFU1e3yl1GpAZJ9BQBAIZ5uMBswFXWHPm006hwVZE_TjpQe0j0mm1sXEVk6eKA1v7QA7sjyr1yyzQJhT0_9mZmxhqV_4YVx6TFwjEfiEvAtDXNbEGfGpt1OJKg_B5Sf8b_kLgNf9clb9SA5OHqxZk8mIexqM_7uMXyAI3_fPXqrkwQ1_KN1UYpgEA8kYTChbTwgCiEFhxZMP0eabkVWHQK-Nr_z_EXrKDSCuUoaoWe_pcKf2kDfbTHtIFKt_Z17-RCnNK9CR-K7snDfB1DyMR-vcwojhOV1jd1keB92Zr3BLfYtI0_XSiqHA_tr2wJEPhXx_0qBzvzBbyDTzI1N-UrTpWX_80fB6rJwP3WC82OMbUIIM8Yn1n7P9Rm8JBWP8M63P3ANJcn7lvN7qHsStt7nkA-YIn0swH0wwZwNHAoZkKXGnxEVYVoBwF9nkbCALaySSGG1tfadDGWpveTm_dNN521x36U4CiSQ20j58-atRgAve2NsftCu4UEfjI-paZH3N51gJhM4cGB-lKDAw8994shSFhXl7g1mO703th3DjUYNQV03mav3E6tpOOBnXhTDzArQjY1gnHNhv91sOctRZycMoyfTSVJjTlTSwDMvnfJp0STERFx-dgq9V_aM8F10fgBvVQvL5UP56AowhH-mE36bkJzeg6yjIxzPPrsbs4d27eCHwsrz4Hy2UlEjTW5hOCB1xmcdP9fbzmVUjPBepL3SzabpKxSRqKlaIFZ8tDHumFHM73DuQoIvb42bmpAH5s8xZHGowYPuB6HyQTwdcOkjduQFL02kOKz0J96T_ATssf8Gmlml40vLetBWnTfjfYozzp6y3vMznH4t2Thyp6evMxVz-oMwzyayMRIvHDOYw_RFle7M1wgfBZYsgWyV_REd91vqdONIyYuR1Kw2oA3oMZ7_kX-Cg33_DQoYosa1T_L2YSiyEu0FQZARLD-Au-EWBBet_OYaDgWkrTK_d3_Dbze624UAyHkYQjXe5hF_SrLNPvHvcLAun_6peKNX1w4zlAMIA1L85RPAU_-8wshAJVR17N8mS9zmBb4AjuR9Yf23eEuX8IhbiLOE7oawrDojj92QfyIjzm8_-eswhdTu8EXwyqHDznaz0AKNvbJr4xYnJu3cN_vuNfdvYv0GL9Mf1gjIlpKZKAnhNHzUw4x5sN-tIczg0FzefDm4wMb2nPFlgzrxUew1kfHQzfywy6F1xgaOP2cYXYc2fdCeFlzB3WSIyicymJhI0mR8tMIOGMHMvXCtUkB-_4-LuRC0pe8zlHNpooJ-RQMTAM498wvSdbR172_UOmzFlg9ArNfNMLy2K8tlsKsJOIIHvRdC7rrCXc2STAIybWwdOhkBZLa_AvQjOsAAHGaCMoL9_oMJ4ESlBIx-JPpOF7Ss8x0kTDNfpupaVpFrazriBb110Bz40i0_kNyA8k9vHekJE1Q1LFE0AahTwWxl0EARfW_CiWIW15YeL8YYPPfV3hGO900y_caZmefS-TlIorV9RoIcmBK_TtDe0kAvz295q7P09I6CV0HYEnBMxFMhM11N8ChSJ8eUrm80-A3FhcwjrySeMs3nKcn1Q1tIW_AGnzZQXrgx32_B70AxfN_eWKjRxSccUtahiXJiP1RRwiPsHYNYw5fEdiz_18ufVWXekX93f9IuZ-hpR0EZCMjxxK03c_268j6Mg22y41__7Rs7kTUlX0G0Q8ozEw10kuBDbVwjqFEERacfHZQrveWF3OP_JixwrGbJiSUgi-j4Mla9ZvOt6bF9HUCOUhCufYwLqeKVdK6CRAArYlK_Z_BhIp9MQ',
    description: 'Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим.'
  },
  { 
    id: 3, 
    title: 'Терминатор 2: Судный день', 
    year: '1991',
    posterUrl: 'https://kinopoisk-ru.clstorage.net/1G46In268/17e6beABxq4/9ZdrcRnIMgZ1CjcBP98kag0NbiCxjZKzQMg-Zphja5cmFBhn52gs-9JCwuXcAlD10RytwkpV0r2u3OwZhYDbqLWS_3XdmqVG8Epk1WhYM3gKgSCt6gTcPZ8BsqnAMjtGI8MO8Dd4r22ClAV1TRvJMI5KMVVLAYI5sAvmSBbWUfnx0CK2WZW1DzSb8E08mu6t1Aim4C9G1j0dAj6hyv7-S7vIiXh5sC_uANxb-QNfDOPJQvLXSIzKdfJBLwvW1hA7_x9vdBSTes833PTEcNvoopXFbSniwRL1Ecq2IMl_tk64BU64d_jhLItSlXtOXoWlRUQ6FkNMR_X_QqnFGl3YP3zaIDjWl7ULsBkwCzhcJKRWCOlrKgEetBEHNubNuXeKM0oKM3d94SvNHliyhBzHLI7MMRMJA0r9cgGsz1hXXHawE6KwF5iwCnkTOc09XuBuX4fsaCEGVfWXTz0lCjU_SHTCAPA9_qKsh5pXcUJaQOVNw7wbxEFHNjqC54EeEJG79lAoMZDQdU463XpAOBOt7hsK5uhhAtGzVYMzKo-0-Aq5AEQz9rrpps4bn3_I10rkQAH7HUxBBHm-yamHEpyadnBeqvme2_yO8FL_BP3WYK-bi6zp50necpbFcKkHcrUJPkLN-rHx7a0OmpryjBaFZEyJ_BvBhcB494KrQxJX2Dj7mSrwXhrxwvDZ_MH_W6Xk341uYeNKXvueiXsgijw8T_xFSfN29-2sj9SasAjfS20MQzAWDgxONrqE6c8QkJT2dR_h913S-0H83TCF9N5gpdZMoy9gjBu6V8l-KgX0tsB-D09wvb8oIoLU1bNFWkqsRkuyGUHKzD03TKxJF1mRML0f47SVn_rDcpw9hz0YoG-fh-PjIUTYPRdAdqhBubyP9soM83d9reVG3lW7jZJEao8K-BZESY3_-kvkBtpcm_08E-i5Hpv8Rz3SNM_8124ukkaqJCAN2P4VDnLizfW_A33Bjj70MK-nT1VSegwfwiTGTXWeBgBOcfhMLg0YH9e-9lih9NATPIWz1HSINRSsahtAa24vBVf62Iuw4wD0dUdwAkw79vVg40_X0zeFVc4hTUJ53UnFy_E3zOtM0VkSvDYf7XBTWXoKe909SvkQZObfw-nr6g9TPtEB86hIsn_F8kiM9zb84CzNl5Z0yxyHLYILfpPLwAW5cwJjBBhdEPT9FiN139A6yzEVNEn_1mVsX4RjLWYEGnjYwTGqi_u9jb4ADff1dyUnRNzQuUYRh6xIx_kfR4ENNTjBI4zdndOxdltrdlcVusM5UHuLt1Jv51rCqSOgDRK6m8K9YgHx_4C1wIx6sPUoqUhVlbmDXMNpwcE7WoINxHAzyyhA2teUc_ib4rlRn7sKuRB8SbjfoSaWRKUh5ozV8hFCuCgPffrPMQpAvfl2aCWPX9RzzhDDY8RItF0Kgk20_wmrTpXV3zE20Wazn5qzjb-c8k94EiNlkgLi4-6O0HfSALLnA3S_jfUKzfn5denux1qePMbUyyLPQjuRQMfLObbFY4kY0ZZ8PRtp99hYsIM_3znMsZXgLxzNouemzpk100d_qg92Mg58QE87N7RppopVELvBlcprAQq4Hk6FCz61CKsHFZDee3cYrjER1jMBNFp4AjfVY6IYiOqk6YibO9UJ8moKPfYHuI2GsvE07mpPlB8whFfKpY-K9dJKi0M9-EsrRBcVXrl9Uii2X9vzhjAUf8982u5k1w8kZCPAGbqSh7DhCH20QLSKh3Z5OC1rh5fcswQVTKlEzHMbhsuHPHlJb4tX3JO9tNhhNhaauYL7V_NJt5gkIddKa-jggRM22827ooP888W6CsF4_zTm4YXTnTjKWAtsAMT-HoBMwvCzwW-LWJ-c9z8X6rXR0_yHuxS7Rf8SZC7SCqwl6weX-FkBOaYN_rNO_YQM8Da6rCZLXhT9Bh9PYAxNdtdJg0969gwmBdIe2Xv1lid_FBhxDzjUuMPwWChnWgNrLSnBUTQfgDMth3-2zvRABbk8diiiBFNYsQMSiOIGyzXRTE-NtTDL7k-QWp_4flEhsFAYfQT90rAH9VXp71NC76OsB5KyGwN_rsb7_U3zzE7x-P6gLcrXVL2N3gRpj8083YyLxfEwAeiA39CUsbVSpXeXln_Gsp01zLeQI2VeDeoh789f_5jN8i7AvnRK9kXGcz3-56yDll_zgNfK7UKMtdkDioK6voWkSBmcnjv_Ua833Fd_TPFb8Q01F26nGwZnp66FEHxbyLBgj_Z7yfkCCXm3ui3iA9caO4UVRGGPQfndD8xCcfFO4cHWFdTwdtRtO9nfOoL0ETNEfNvvqVZHpWFhjt42nsexL0768gH9g8a49fKk7otQUzqBH8VoAMV4UoKPzL86SqsIWlQYu3webTEfXzxD8NxzRfzd5iySC-Qk50SevhkJeSgPM7_O9kQH9bq87SzA2xM1hBDEpAEMtdfAQ0R6MMthSJFSX377VOE0FVfyBjGd_ENy3mSknE4nr2IFVvBXQ7-oSHPyjjPFRrgwtWWixF0b-onQzGzFSXBbh4BE8XhB74ZWnFtxdxfncNnQ8444HfRC-JWtrN2N76UgDlZ4W0Dz6ACx_MN8xczyf7Clr42XVfjM1s5ljIM6EsALzTr5xCQMGdBfd_6WKH4c3rrH8R83QjXdrC_fxCqlKUSf-tqKsWKCMvpIMUjNM3l0JymAE914RBxKpUjDMNPDwE3-MIRsxJ6fE3c-EOk-VpgzA7xV-Mv2lKSvUkSu4e8NWraYTjVvCvW0A3NPTHb5Pelpi5-fvQXRiOOIzLrZgEyDtHMEJg_f0JT0sBPvvJ6ROgHwUvAD8hoopF3DI-vkxhI6GIM7Igk1vQ8-xMV7_Pkh6ocWHbgDUkqpxsv-FglDAz6whC_F3pXafrgXaD0XF3GBM1y4QrQbaelQzWTka0Xd_BEHeWvHtPrIMQXK_rn_6acNE5pwQtpDK4FEOhMEioD4MQ',
    description: 'Прошло более десяти лет с тех пор, как киборг из 2029 года пытался уничтожить Сару Коннор — женщину, чей будущий сын выиграет войну человечества против машин.'
  },
];

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      return JSON.parse(savedMovies);
    }
    return INITIAL_MOVIES;
  });

  const [editingMovie, setEditingMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
    console.log('Сохранено фильмов:', movies.length);
  }, [movies]);

  const handleSaveMovie = (movie) => {
    if (editingMovie) {
      setMovies(movies.map(m => (m.id === movie.id ? movie : m)));
      setEditingMovie(null);
    } else {
      setMovies([...movies, movie]);
    }
  };

  const handleDelete = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const clearEditing = () => setEditingMovie(null);

  const filteredMovies = movies.filter(movie => {
    const matchesSearch = 
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (movie.description && movie.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesYear = filterYear === '' || movie.year.includes(filterYear);
    return matchesSearch && matchesYear;
  });

  return (
    <div className="app-container">
      <h1>Список фильмов</h1>
      
      <MovieForm 
        onSave={handleSaveMovie}
        editingMovie={editingMovie}
        clearEditing={clearEditing}
      />

      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterYear={filterYear}
        onFilterChange={setFilterYear}
      />

      <MovieList 
        movies={filteredMovies}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        textAlign: 'center', 
        background: 'white', 
        borderRadius: '16px',
        color: '#475569'
      }}>
        Всего фильмов: {filteredMovies.length}
      </div>
      
      {/* Кнопка очистки localStorage */}
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button 
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
          style={{ 
            background: '#ef4444', 
            color: 'white', 
            padding: '5px 10px',
            fontSize: '12px'
          }}
        >
          Сбросить все данные
        </button>
      </div>
    </div>
  );
}

export default App;