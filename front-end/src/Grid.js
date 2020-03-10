import React, { Component } from 'react';

export default class Grid extends Component {
  componentDidUpdate() {
    for(var ref in this.refs) {
      this.refs[ref].innerHTML = ''
    }

    const { doug, mike, miguel, dustin } = this.props.players;

    const _doug = require('./assets/doug.png')
    const _mike = require('./assets/mike.png')
    const _miguel = require('./assets/miguel.png')
    const _dustin = require('./assets/dustin.png')

    const width = this.refs[1].getBoundingClientRect().width - 2
    const height = this.refs[1].getBoundingClientRect().height - 2

    const style = "padding: 2px; border-radius: 3px; display: flex; justify-content: center; align-items: center; position: absolute;"

    if(doug) {
      this.refs[doug].innerHTML += `<div style='${style} top: 0px; left: 0px;'><img style="width: ${width}px; height: ${height}px;" src = ${_doug} /></div>`
    }

    if(mike) {
      if(doug && mike === doug) {
        this.refs[mike].innerHTML += `<div style='${style} top: 5px; left: 5px;'><img style="width: ${width}px; height: ${height}px;" src = ${_mike} /></div>`
      } else {
        this.refs[mike].innerHTML += `<div style='${style} top: 0px; left: 0px;'><img style="width: ${width}px; height: ${height}px;" src = ${_mike} /></div>`
      }
    }

    if(miguel) {
      if((mike && doug) && miguel === mike && miguel === doug) {
        this.refs[miguel].innerHTML += `<div style='${style} top: 10px; left: 10px;'><img style="width: ${width}px; height: ${height}px;" src = ${_miguel} /></div>`
      } else if((mike && miguel === mike) || (doug && miguel === doug)) {
        this.refs[miguel].innerHTML += `<div style='${style} top: 5px; left: 5px;'><img style="width: ${width}px; height: ${height}px;" src = ${_miguel} /></div>`
      } else {
        this.refs[miguel].innerHTML += `<div style='${style} top: 0px; left: 0px;'><img style="width: ${width}px; height: ${height}px;" src = ${_miguel} /></div>`
      }
    }

    if(dustin) {
      if((doug && mike && miguel) && dustin === doug && dustin === mike && dustin === miguel) {
        this.refs[dustin].innerHTML += `<div style='${style} top: 15px; left: 15px;'><img style="width: ${width}px; height: ${height}px;" src = ${_dustin} /></div>`
      } else if((mike && miguel && dustin === mike && dustin === miguel) || (mike && doug && dustin === mike && dustin === doug) || (doug && miguel && dustin === doug && dustin === miguel)) {
        this.refs[dustin].innerHTML += `<div style='${style} top: 10px; left: 10px;'><img style="width: ${width}px; height: ${height}px;" src = ${_dustin} /></div>`
      } else if((doug && dustin === doug) || (mike && dustin === mike) || (miguel && dustin === miguel)) {
        this.refs[dustin].innerHTML += `<div style='${style} top: 5px; left: 5px;'><img style="width: ${width}px; height: ${height}px;" src = ${_dustin} /></div>`
      } else {
        this.refs[dustin].innerHTML += `<div style='${style} top: 0px; left: 0px;'><img style="width: ${width}px; height: ${height}px;" src = ${_dustin} /></div>`
      }
    }
  }

  render() {
    const container = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }

    const bg = {
      height: '100%',
      width: 'auto'
    }

    const overlay = {
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: '1000',
      top: 0,
      left: 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(40, 1fr)',
      gridTemplateRows: 'repeat(31, 1fr)',
      padding: '5px 15px 0 13px'
    }

    return (
      <div
        style = { container }
      >
        <img 
          src = { require('./assets/lumbda.jpg') } 
          style = { bg }
          alt="bg"
        />
        <div style = { overlay }>
          { Array.from(Array(1240).keys()).map((item, i) => (
            <div 
              ref = { this.getId(item) }
              key = { i }
              style = {{ position: 'relative' }}
            ></div>
          ))}
        </div>
      </div>
    )
  }

  getId = item => {
    switch(item) {
      case 14:
        return 461;
      case 19:
        return 452;
      case 20:
        return 410;
      case 21:
        return 336;
      case 22:
        return 359;
      case 54:
        return 457;
      case 56:
        return 436;
      case 57:
        return 481;
      case 59:
        return 347;
      case 60:
        return 291;
      case 61:
        return 286;
      case 62:
        return 319;
      case 63:
        return 345;
      case 91:
        return 470
      case 92:
        return 459
      case 93:
        return 458
      case 94:
        return 426
      case 95:
        return 441
      case 96:
        return 350
      case 97:
        return 404
      case 98:
        return 353
      case 99:
        return 442
      case 100:
        return 337
      case 101:
        return 285
      case 102:
        return 269
      case 103:
        return 375
      case 104:
        return 385
      case 129:
        return 469
      case 130:
        return 425
      case 131:
        return 454
      case 132:
        return 423
      case 133:
        return 408
      case 134:
        return 422
      case 135:
        return 372
      case 136:
        return 332
      case 137:
        return 374
      case 138:
        return 325
      case 139:
        return 296
      case 140:
        return 271
      case 141:
        return 267
      case 142:
        return 227
      case 143:
        return 288
      case 144:
        return 424
      case 145:
        return 473
      case 146:
        return 494
      case 170:
        return 418
      case 171:
        return 415
      case 172:
        return 406
      case 173:
        return 361
      case 174:
        return 302
      case 175:
        return 363
      case 176:
        return 328
      case 177:
        return 357
      case 178:
        return 280
      case 179:
        return 248
      case 180:
        return 231
      case 181:
        return 172
      case 182:
        return 200
      case 183:
        return 206
      case 184:
        return 380
      case 185:
        return 392
      case 186:
        return 462
      case 210:
        return 474
      case 211:
        return 447
      case 212:
        return 405
      case 213:
        return 303
      case 214:
        return 284
      case 215:
        return 368
      case 216:
        return 312
      case 217:
        return 268
      case 218:
        return 411
      case 219:
        return 290
      case 220:
        return 207
      case 221:
        return 151
      case 222:
        return 147
      case 223:
        return 153
      case 224:
        return 329
      case 225:
        return 244
      case 226:
        return 390
      case 250:
        return 450
      case 251:
        return 445
      case 252:
        return 339
      case 253:
        return 287
      case 254:
        return 252
      case 255:
        return 234
      case 256:
        return 219
      case 257:
        return 203
      case 258:
        return 299
      case 259:
        return 311
      case 260:
        return 210
      case 261:
        return 132
      case 262:
        return 134
      case 263:
        return 144
      case 264:
        return 155
      case 265:
        return 316
      case 266:
        return 331
      case 267:
        return 446
      case 268:
        return 466
      case 269:
        return 472
      case 290:
        return 499
      case 291:
        return 456
      case 292:
        return 275
      case 293:
        return 242
      case 294:
        return 218
      case 295:
        return 216
      case 296:
        return 204
      case 297:
        return 165
      case 298:
        return 208
      case 299:
        return 182
      case 300:
        return 157
      case 301:
        return 116
      case 302:
        return 119
      case 303:
        return 152
      case 304:
        return 187
      case 305:
        return 201
      case 306:
        return 283
      case 307:
        return 313
      case 308:
        return 486
      case 331:
        return 412
      case 332:
        return 310
      case 333:
        return 259
      case 334:
        return 263
      case 335:
        return 245
      case 336:
        return 237
      case 337:
        return 125
      case 338:
        return 83
      case 339:
        return 130
      case 340:
        return 124
      case 341:
        return 115
      case 342:
        return 95
      case 343:
        return 94
      case 344:
        return 160
      case 345:
        return 192
      case 346:
        return 223
      case 371:
        return 488
      case 372:
        return 348
      case 373:
        return 246
      case 374:
        return 314
      case 375:
        return 254
      case 376:
        return 191
      case 377:
        return 110
      case 378:
        return 76
      case 379:
        return 72
      case 380:
        return 122
      case 381:
        return 88
      case 382:
        return 53
      case 383:
        return 69
      case 384:
        return 103
      case 385:
        return 174
      case 386:
        return 224
      case 411:
        return 429
      case 412:
        return 320
      case 413:
        return 215
      case 414:
        return 190
      case 415:
        return 180
      case 416:
        return 82
      case 417:
        return 64
      case 418:
        return 73
      case 419:
        return 63
      case 420:
        return 40
      case 421:
        return 41
      case 422:
        return 39
      case 423:
        return 51
      case 424:
        return 57
      case 425:
        return 145
      case 426:
        return 220
      case 450:
        return 448
      case 451:
        return 364
      case 452:
        return 257
      case 453:
        return 146
      case 454:
        return 99
      case 455:
        return 91
      case 456:
        return 84
      case 457:
        return 62
      case 458:
        return 46
      case 459:
        return 20
      case 460:
        return 27
      case 461:
        return 30
      case 462:
        return 32
      case 463:
        return 54
      case 464:
        return 169
      case 465:
        return 186
      case 466:
        return 205
      case 467:
        return 479
      case 490:
        return 394
      case 491:
        return 381
      case 492:
        return 346
      case 493:
        return 177
      case 494:
        return 113
      case 495:
        return 101
      case 496:
        return 87
      case 497:
        return 71
      case 498:
        return 77
      case 499:
        return 19
      case 500:
        return 28
      case 501:
        return 31
      case 502:
        return 33
      case 503:
        return 38
      case 504:
        return 66
      case 505:
        return 123
      case 506:
        return 241
      case 507:
        return 266
      case 508:
        return 279
      case 509:
        return 416
      case 530:
        return 453
      case 531:
        return 451
      case 532:
        return 402
      case 533:
        return 176
      case 534:
        return 114
      case 535:
        return 161
      case 536:
        return 74
      case 537:
        return 47
      case 538:
        return 43
      case 539:
        return 10
      case 540:
        return 23
      case 541:
        return 26
      case 542:
        return 55
      case 543:
        return 59
      case 544:
        return 92
      case 545:
        return 128
      case 546:
        return 189
      case 547:
        return 255
      case 548:
        return 265
      case 549:
        return 270
      case 550:
        return 228
      case 551:
        return 476
      case 552:
        return 440
      case 570:
        return 464
      case 571:
        return 400
      case 572:
        return 366
      case 573:
        return 335
      case 574:
        return 188
      case 575:
        return 139
      case 576:
        return 65
      case 577:
        return 58
      case 578:
        return 1
      case 579:
        return 0
      case 580:
        return 4
      case 581:
        return 13
      case 582:
        return 15
      case 583:
        return 104
      case 584:
        return 107
      case 585:
        return 121
      case 586:
        return 143
      case 587:
        return 212
      case 588:
        return 249
      case 589:
        return 282
      case 590:
        return 379
      case 591:
        return 395
      case 592:
        return 421
      case 610:
        return 376
      case 611:
        return 369
      case 612:
        return 295
      case 613:
        return 365
      case 614:
        return 304
      case 615:
        return 162
      case 616:
        return 67
      case 617:
        return 16
      case 618:
        return 8
      case 619:
        return 2
      case 620:
        return 3
      case 621:
        return 5
      case 622:
        return 24
      case 623:
        return 44
      case 624:
        return 120
      case 625:
        return 127
      case 626:
        return 184
      case 627:
        return 221
      case 628:
        return 240
      case 629:
        return 386
      case 630:
        return 414
      case 631:
        return 403
      case 649:
        return 495
      case 650:
        return 383
      case 651:
        return 330
      case 652:
        return 272
      case 653:
        return 305
      case 654:
        return 301
      case 655:
        return 171
      case 656:
        return 61
      case 657:
        return 56
      case 658:
        return 7
      case 659:
        return 6
      case 660:
        return 9
      case 661:
        return 11
      case 662:
        return 17
      case 663:
        return 42
      case 664:
        return 118
      case 665:
        return 137
      case 666:
        return 209
      case 667:
        return 253
      case 668:
        return 258
      case 669:
        return 306
      case 670:
        return 397
      case 671:
        return 443
      case 672:
        return 471
      case 690:
        return 355
      case 691:
        return 235
      case 692:
        return 232
      case 693:
        return 222
      case 694:
        return 292
      case 695:
        return 148
      case 696:
        return 136
      case 697:
        return 49
      case 698:
        return 29
      case 699:
        return 21
      case 700:
        return 12
      case 701:
        return 14
      case 702:
        return 37
      case 703:
        return 80
      case 704:
        return 86
      case 705:
        return 90
      case 706:
        return 178
      case 707:
        return 243
      case 708:
        return 256
      case 709:
        return 327
      case 710:
        return 427
      case 711:
        return 430
      case 712:
        return 439
      case 730:
        return 419
      case 731:
        return 276
      case 732:
        return 197
      case 733:
        return 196
      case 734:
        return 159
      case 735:
        return 142
      case 736:
        return 102
      case 737:
        return 79
      case 738:
        return 45
      case 739:
        return 25
      case 740:
        return 18
      case 741:
        return 34
      case 742:
        return 35
      case 743:
        return 81
      case 744:
        return 96
      case 745:
        return 97
      case 746:
        return 181
      case 747:
        return 293
      case 748:
        return 360
      case 749:
        return 398
      case 750:
        return 438
      case 751:
        return 465
      case 752:
        return 498
      case 769:
        return 497
      case 770:
        return 437
      case 771:
        return 420
      case 772:
        return 213
      case 773:
        return 179
      case 774:
        return 175
      case 775:
        return 109
      case 776:
        return 98
      case 777:
        return 70
      case 778:
        return 60
      case 779:
        return 36
      case 780:
        return 22
      case 781:
        return 50
      case 782:
        return 52
      case 783:
        return 75
      case 784:
        return 85
      case 785:
        return 154
      case 786:
        return 193
      case 787:
        return 251
      case 788:
        return 315
      case 789:
        return 382
      case 790:
        return 388
      case 791:
        return 477
      case 792:
        return 483
      case 809:
        return 493
      case 810:
        return 490
      case 811:
        return 444
      case 812:
        return 238
      case 813:
        return 233
      case 814:
        return 183
      case 815:
        return 185
      case 816:
        return 126
      case 817:
        return 163
      case 818:
        return 149
      case 819:
        return 48
      case 820:
        return 78
      case 821:
        return 89
      case 822:
        return 68
      case 823:
        return 100
      case 824:
        return 112
      case 825:
        return 140
      case 826:
        return 217
      case 827:
        return 247
      case 828:
        return 261
      case 829:
        return 322
      case 830:
        return 435
      case 850:
        return 478
      case 851:
        return 351
      case 852:
        return 343
      case 853:
        return 236
      case 854:
        return 229
      case 855:
        return 170
      case 856:
        return 129
      case 857:
        return 194
      case 858:
        return 202
      case 859:
        return 105
      case 860:
        return 108
      case 861:
        return 93
      case 862:
        return 135
      case 863:
        return 106
      case 864:
        return 141
      case 865:
        return 156
      case 866:
        return 164
      case 867:
        return 298
      case 868:
        return 277
      case 869:
        return 323
      case 870:
        return 433
      case 871:
        return 460
      case 891:
        return 491
      case 892:
        return 273
      case 893:
        return 264
      case 894:
        return 250
      case 895:
        return 289
      case 896:
        return 226
      case 897:
        return 214
      case 898:
        return 173
      case 899:
        return 133
      case 900:
        return 117
      case 901:
        return 166
      case 902:
        return 150
      case 903:
        return 111
      case 904:
        return 158
      case 905:
        return 168
      case 906:
        return 340
      case 907:
        return 324
      case 908:
        return 354
      case 910:
        return 455
      case 932:
        return 308
      case 933:
        return 274
      case 934:
        return 294
      case 935:
        return 389
      case 936:
        return 300
      case 937:
        return 225
      case 938:
        return 195
      case 939:
        return 138
      case 940:
        return 131
      case 941:
        return 198
      case 942:
        return 199
      case 943:
        return 367
      case 944:
        return 167
      case 945:
        return 260
      case 946:
        return 356
      case 947:
        return 349
      case 948:
        return 384
      case 972:
        return 428
      case 973:
        return 391
      case 974:
        return 334
      case 975:
        return 341
      case 976:
        return 377
      case 977:
        return 278
      case 978:
        return 228
      case 979:
        return 211
      case 980:
        return 244
      case 981:
        return 239
      case 982:
        return 230
      case 983:
        return 297
      case 984:
        return 262
      case 985:
        return 358
      case 986:
        return 401
      case 987:
        return 352
      case 988:
        return 485
      case 1013:
        return 396
      case 1014:
        return 393
      case 1015:
        return 449
      case 1016:
        return 409
      case 1017:
        return 317
      case 1018:
        return 281
      case 1019:
        return 309
      case 1020:
        return 326
      case 1021:
        return 321
      case 1022:
        return 307
      case 1023:
        return 371
      case 1024:
        return 370
      case 1025:
        return 407
      case 1026:
        return 463
      case 1027:
        return 362
      case 1054:
        return 482
      case 1055:
        return 492
      case 1056:
        return 431
      case 1057:
        return 387
      case 1058:
        return 318
      case 1059:
        return 333
      case 1060:
        return 342
      case 1061:
        return 413
      case 1062:
        return 373
      case 1063:
        return 475
      case 1064:
        return 434
      case 1065:
        return 496
      case 1066:
        return 468
      case 1067:
        return 399
      case 1097:
        return 417
      case 1098:
        return 487
      case 1099:
        return 378
      case 1100:
        return 432
      case 1102:
        return 480
      case 1103:
        return 484
      case 1107:
        return 467
      case 1138:
        return 489
      default: return `x-${item}`;
    }
  }
}