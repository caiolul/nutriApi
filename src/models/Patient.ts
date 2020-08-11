import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import User from './Users';

@Entity('patients')
class Patient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    nutri_patient_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'nutri_patient_id' })
    nutri: User;

    @Column('text')
    email: string;

    @Column('text')
    sex: string;

    @Column('text')
    occupation: string;

    @Column('text')
    civilSituation: string;

    @Column('text')
    reason: string;

    @Column('text')
    age: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Patient;
