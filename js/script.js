const app = new Vue(
    {
        el: '#app',

        data: {
            contacts: [
                {
                    name: 'Michela',
                    avatar: 'img/av_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ]
                },

                {
                    name: 'Fabio',
                    avatar: 'img/av_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ]
                },

                {
                    name: 'Pietro',
                    avatar: 'img/av_4.png'
                },

                {
                    name: 'Paolo',
                    avatar: 'img/av_5.png'
                },

                {
                    name: 'Stefania',
                    avatar: 'img/av_6.png'
                },



            ]
        },

        methods: {

        }

    }
);

