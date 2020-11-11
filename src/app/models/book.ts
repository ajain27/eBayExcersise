export interface Book {
    kind: string;
    totalItems: number;
    items: [{
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        volumeInfo: {
            title: string;
            authors: [
                string
            ];
            publisher: string;
            description: string;
            industryIdentifiers: [{
                type: string;
                identifier: string;
            },
                {
                    type: string;
                    identifier: string;
                }
            ];
            readingModes: {
                text: boolean;
                image: boolean
            };
            pageCount: number;
            printType: string;
            categories: [
                string
            ];
            maturityRating: string;
            allowAnonLogging: boolean;
            contentVersion: string;
            panelizationSummary: {
                containsEpubBubbles: boolean;
                containsImageBubbles: boolean;
            };
            imageLinks: {
                smallThumbnail: string;
            };
            language: string;
            previewLink: string;
            canonicalVolumeLink: string;
        },
        saleInfo: {
            country: string;
            saleability: string;
            isEbook: boolean;
            listPrice: {
                amount: any;
                currencyCode: string
            };
            retailPrice: {
                amount: any;
                currencyCode: string
            };
            buyLink: string;
            offers: [{
                finskyOfferType: number;
                listPrice: {
                    amountInMicros: any;
                    currencyCode: string;
                };
                retailPrice: {
                    amountInMicros: any;
                    currencyCode: string,
                };
                giftable: true
            }]
        };
        accessInfo: {
            country: string;
            viewability: string;
            embeddable: boolean;
            publicDomain: boolean;
            textToSpeechPermission: string;
            epub: {
                isAvailable: boolean;
            };
            pdf: {
                isAvailable: boolean;
            };
            webReaderLink: string;
            accessViewStatus: string;
            quoteSharingAllowed: boolean;
        };
        searchInfo: {
            textSnippet: string;
        }
    }];
}
