import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import Patient from './Patient';

@Entity('report')
class ReportPatient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    problemPatient: string;

    @Column()
    patient_id: string;

    @OneToOne(() => Patient)
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

    @Column('float') // Change types for float
    weight: number;

    @Column('float')
    height: number;

    @Column()
    nivelFsica: string;

    @Column('float')
    cc: number;

    @Column('float')
    cq: number;

    @Column('float')
    porcentFat: number;

    @Column('float')
    tmbValue: number;

    @Column('float')
    imcValue: number;

    @Column('float')
    vetValue: number;

    @Column('text')
    medication: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default ReportPatient;
